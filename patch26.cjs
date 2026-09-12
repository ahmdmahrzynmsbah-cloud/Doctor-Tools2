const fs = require('fs');
let content = fs.readFileSync('src/pages/Inventory.tsx', 'utf8');

content = content.replace(/date: new Date\(\)\.toISOString\(\)\.split\('T'\)\[0\], date: new Date\(\)\.toISOString\(\)\.split\('T'\)\[0\]/g, 'date: new Date().toISOString().split(\'T\')[0]');

fs.writeFileSync('src/pages/Inventory.tsx', content);
console.log('Fixed duplicate date key in Inventory');
