const fs = require('fs');
let content = fs.readFileSync('vite.config.ts', 'utf8');
if (!content.includes('base:')) {
  content = content.replace('export default defineConfig(() => {', 'export default defineConfig(() => {\n  return { base: "./",\n');
  content = content.replace('return {', '');
  fs.writeFileSync('vite.config.ts', content);
}
