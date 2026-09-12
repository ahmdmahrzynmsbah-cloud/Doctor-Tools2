const fs = require('fs');
let content = fs.readFileSync('src/components/InvoicePrint.tsx', 'utf8');

content = content.replace(/key=\{idx\}/g, 'key={`invoice-print-item-${idx}`}');

fs.writeFileSync('src/components/InvoicePrint.tsx', content);
console.log('Patched InvoicePrint keys');
