const fs = require('fs');
let content = fs.readFileSync('src/pages/Dashboard.tsx', 'utf8');

// manual fix for the low stock items which might have failed regex
content = content.replace(/inventory\.filter\(i => i\.quantity <= 3\)\.map\(\(item\) => \(/g, 'inventory.filter(i => i.quantity <= 3).map((item, idx) => (');
content = content.replace(/key=\{item\.id\}/g, 'key={item.id ? `low-stock-${item.id}` : `low-stock-idx-${idx}`}');

fs.writeFileSync('src/pages/Dashboard.tsx', content);
console.log('Patched low stock in Dashboard');
