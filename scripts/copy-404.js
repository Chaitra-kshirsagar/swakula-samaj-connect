import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy custom 404.html to dist folder for GitHub Pages SPA routing
const sourceFile = path.join(__dirname, '..', 'public', '404.html');
const targetFile = path.join(__dirname, '..', 'dist', '404.html');

try {
  if (fs.existsSync(sourceFile)) {
    // Read the custom 404.html content
    let content = fs.readFileSync(sourceFile, 'utf8');
    
    // Get the latest build assets from dist/index.html
    const indexFile = path.join(__dirname, '..', 'dist', 'index.html');
    if (fs.existsSync(indexFile)) {
      const indexContent = fs.readFileSync(indexFile, 'utf8');
      
      // Extract the latest asset URLs from index.html
      const jsMatch = indexContent.match(/src="([^"]*\.js)"/);
      const cssMatch = indexContent.match(/href="([^"]*\.css)"/);
      
      if (jsMatch && cssMatch) {
        // Replace the asset URLs in 404.html with the latest ones
        content = content.replace(/src="[^"]*\.js"/, `src="${jsMatch[1]}"`);
        content = content.replace(/href="[^"]*\.css"/, `href="${cssMatch[1]}"`);
      }
    }
    
    // Write the content to dist/404.html
    fs.writeFileSync(targetFile, content);
    console.log('✅ Successfully created 404.html with SPA redirect script');
  } else {
    console.error('❌ public/404.html not found');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error creating 404.html:', error.message);
  process.exit(1);
}
