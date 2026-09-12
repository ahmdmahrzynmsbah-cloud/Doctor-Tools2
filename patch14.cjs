const fs = require('fs');
let content = fs.readFileSync('src/pages/AuditLog.tsx', 'utf8');

content = content.replace(/sortedTransactions\.map\(\(tx\) => \(/g, 'sortedTransactions.map((tx, idx) => (');
content = content.replace(/key=\{tx\.id\}/g, 'key={tx.id ? `audit-${tx.id}` : `audit-idx-${idx}`}');

fs.writeFileSync('src/pages/AuditLog.tsx', content);
console.log('Patched AuditLog keys');
