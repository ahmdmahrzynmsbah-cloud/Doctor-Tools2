const fs = require('fs');
let content = fs.readFileSync('src/pages/Dashboard.tsx', 'utf8');

content = content.replace(/recentInvoices\.map\(\(inv\) => \{/g, 'recentInvoices.map((inv, idx) => {');

fs.writeFileSync('src/pages/Dashboard.tsx', content);
console.log('Patched Dashboard mapping');
