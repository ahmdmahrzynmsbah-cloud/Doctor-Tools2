const fs = require('fs');
let content = fs.readFileSync('src/pages/Invoices.tsx', 'utf8');

content = content.replace(/invoiceItems\.map\(\(item, idx\) => \{/g, 'invoiceItems.map((item, idx) => {');

fs.writeFileSync('src/pages/Invoices.tsx', content);
console.log('Patched Invoices mapping');
