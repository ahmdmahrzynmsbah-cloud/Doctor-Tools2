const fs = require('fs');
let content = fs.readFileSync('src/pages/Invoices.tsx', 'utf8');

content = content.replace(/filteredInvoices\.map\(\(inv\) => \{/g, 'filteredInvoices.map((inv, idx) => {');

fs.writeFileSync('src/pages/Invoices.tsx', content);
console.log('Patched Invoices mapping');
