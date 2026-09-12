const fs = require('fs');
let content = fs.readFileSync('src/pages/Inventory.tsx', 'utf8');

content = content.replace(/filteredInventory\.map\(\(item\) => \(/g, 'filteredInventory.map((item, idx) => (');
content = content.replace(/key=\{item\.id\}/g, 'key={item.id ? `inventory-${item.id}` : `inventory-idx-${idx}`}');

fs.writeFileSync('src/pages/Inventory.tsx', content);
console.log('Patched keys in Inventory');
