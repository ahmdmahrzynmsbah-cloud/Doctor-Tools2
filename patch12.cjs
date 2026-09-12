const fs = require('fs');
let content = fs.readFileSync('src/pages/Dashboard.tsx', 'utf8');

content = content.replace(/recentInvoices\.map\(\(inv\) => \(/g, 'recentInvoices.map((inv, idx) => (');
content = content.replace(/key=\{inv\.id\}/g, 'key={inv.id ? `recent-inv-${inv.id}` : `recent-inv-idx-${idx}`}');
content = content.replace(/inventory\.filter.*?\.map\(\(item\) => \(/g, 'inventory.filter(i => i.quantity <= 3).map((item, idx) => (');
content = content.replace(/key=\{item\.id\}/g, 'key={item.id ? `low-stock-${item.id}` : `low-stock-idx-${idx}`}');

fs.writeFileSync('src/pages/Dashboard.tsx', content);
console.log('Patched keys in Dashboard');
