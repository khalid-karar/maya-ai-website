/**
 * Maya AI — Contact API server
 * Runs on port 3001 alongside the Vite dev server.
 * Stores briefing requests in SQLite (contacts.db).
 *
 * Start:  node server.js
 * Dev:    run alongside `npm run dev` (Vite proxies /api → :3001)
 */

const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
require('dotenv').config();

const PORT = process.env.API_PORT || 3001;
const DB_PATH = path.join(__dirname, 'contacts.db');

// ── Database setup ──────────────────────────────────────────────────────────
const db = new Database(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT    NOT NULL,
    org        TEXT    NOT NULL,
    email      TEXT    NOT NULL,
    context    TEXT,
    message    TEXT,
    source     TEXT    DEFAULT 'homepage',
    created_at TEXT    DEFAULT (datetime('now'))
  )
`);

const insertContact = db.prepare(`
  INSERT INTO contacts (name, org, email, context, message, source)
  VALUES (@name, @org, @email, @context, @message, @source)
`);

// ── Express app ─────────────────────────────────────────────────────────────
const app = express();
app.use(express.json());

// CORS — allow the Vite dev server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// POST /api/contact
app.post('/api/contact', (req, res) => {
  const { name, org, email, context, message, source = 'homepage' } = req.body ?? {};

  if (!name || !org || !email) {
    return res.status(400).json({ error: 'name, org, and email are required' });
  }

  try {
    const info = insertContact.run({ name, org, email, context: context ?? '', message: message ?? '', source });
    console.log(`[contact] New submission #${info.lastInsertRowid} from ${email} (${org})`);
    return res.status(201).json({ success: true, id: info.lastInsertRowid });
  } catch (err) {
    console.error('[contact] DB error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Maya AI API server running on http://localhost:${PORT}`);
  console.log(`Contacts stored in: ${DB_PATH}`);
});
