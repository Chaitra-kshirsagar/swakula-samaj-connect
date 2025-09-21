import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy index.html to 404.html for GitHub Pages SPA routing
const sourceFile = path.join(__dirname, '..', 'dist', 'index.html');
const targetFile = path.join(__dirname, '..', 'dist', '404.html');

try {
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
    console.log('✅ Successfully copied index.html to 404.html');
  } else {
    console.error('❌ index.html not found in dist folder');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error copying file:', error.message);
  process.exit(1);
}
