import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCREENSHOTS_DIR = path.join(__dirname, 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const pages = [
  { name: 'home', url: 'http://localhost:3001/' },
  { name: 'capabilities', url: 'http://localhost:3001/capabilities' },
  { name: 'solutions', url: 'http://localhost:3001/solutions' },
  { name: 'deployment', url: 'http://localhost:3001/deployment' },
  { name: 'company', url: 'http://localhost:3001/company' },
  { name: 'contact', url: 'http://localhost:3001/contact' },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const page of pages) {
      console.log(`📸 Capturing ${page.name}...`);
      const browserPage = await browser.newPage();
      await browserPage.setViewport({ width: 1440, height: 900 });
      await browserPage.goto(page.url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait for animations
      await browserPage.evaluate(() => new Promise(resolve => setTimeout(resolve, 1500)));

      const screenshotPath = path.join(SCREENSHOTS_DIR, `${page.name}-viewport.png`);
      await browserPage.screenshot({
        path: screenshotPath,
        fullPage: false,
      });

      console.log(`✅ ${page.name} viewport saved`);

      // Also get scroll height for documentation
      const scrollHeight = await browserPage.evaluate(() => document.body.scrollHeight);
      console.log(`   Scroll height: ${scrollHeight}px`);

      await browserPage.close();
    }

    console.log('\n✨ Viewport screenshots captured successfully!');
  } catch (error) {
    console.error('Error capturing screenshots:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
