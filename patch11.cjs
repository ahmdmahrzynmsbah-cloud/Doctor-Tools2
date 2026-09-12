const fs = require('fs');
let content = fs.readFileSync('src/pages/Invoices.tsx', 'utf8');

content = content.replace(/filteredInvoices\.map\(\(inv\) => \(/g, 'filteredInvoices.map((inv, idx) => (');
content = content.replace(/key=\{inv\.id\}/g, 'key={inv.id ? `invoice-${inv.id}` : `invoice-idx-${idx}`}');
content = content.replace(/key=\{idx\}/g, "key={`invoice-item-${idx}`}");

fs.writeFileSync('src/pages/Invoices.tsx', content);
console.log('Patched keys in Invoices');
