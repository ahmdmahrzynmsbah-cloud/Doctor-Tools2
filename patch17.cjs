const fs = require('fs');
let content = fs.readFileSync('src/pages/AuditLog.tsx', 'utf8');

content = content.replace(/transactions\.map\(\(tx\) => \(/g, 'transactions.map((tx, idx) => (');

fs.writeFileSync('src/pages/AuditLog.tsx', content);
console.log('Patched AuditLog mapping');
