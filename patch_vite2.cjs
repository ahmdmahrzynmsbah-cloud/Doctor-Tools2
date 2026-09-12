const fs = require('fs');
let content = fs.readFileSync('vite.config.ts', 'utf8');
content = content.replace("export default defineConfig(() => { return { base: './',\n  return {", "export default defineConfig(() => {\n  return { base: './',");
// Wait, my replacement earlier was:
content = content.replace("export default defineConfig(() => { return { base: './',  return {", "export default defineConfig(() => {\n  return { base: './',");
fs.writeFileSync('vite.config.ts', content);
