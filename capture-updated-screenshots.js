import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCREENSHOTS_DIR = path.join(__dirname, 'screenshots-updated');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const pages = [
  { name: 'home-updated', url: 'http://localhost:3001/', 'description': 'Homepage with improved six pillars and section rhythm' },
  { name: 'solutions-updated', url: 'http://localhost:3001/solutions', description: 'Solutions page with improved card hierarchy' },
  { name: 'company-updated', url: 'http://localhost:3001/company', description: 'Company page with enhanced visual rhythm' },
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

      await browserPage.evaluate(() => new Promise(resolve => setTimeout(resolve, 1500)));

      const screenshotPath = path.join(SCREENSHOTS_DIR, `${page.name}.png`);
      await browserPage.screenshot({
        path: screenshotPath,
        fullPage: false,
      });

      console.log(`✅ ${page.name} saved`);
      await browserPage.close();
    }

    console.log('\n✨ Updated screenshots captured successfully!');
  } catch (error) {
    console.error('Error capturing screenshots:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
