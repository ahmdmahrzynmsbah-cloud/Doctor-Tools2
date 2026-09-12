const fs = require('fs');
let content = fs.readFileSync('src/components/InvoicePrint.tsx', 'utf8');

content = content.replace(/item\.price\.toLocaleString\(\)/g, 'Number(item.price || 0).toLocaleString()');
content = content.replace(/lineTotal\.toLocaleString\(\)/g, 'Number(lineTotal || 0).toLocaleString()');
content = content.replace(/subtotal\.toLocaleString\(\)/g, 'Number(subtotal || 0).toLocaleString()');
content = content.replace(/discountAmount\.toLocaleString\(\)/g, 'Number(discountAmount || 0).toLocaleString()');
content = content.replace(/invoice\.total\.toLocaleString\(\)/g, 'Number(invoice.total || 0).toLocaleString()');
content = content.replace(/invoice\.paid\.toLocaleString\(\)/g, 'Number(invoice.paid || 0).toLocaleString()');
content = content.replace(/remaining\.toLocaleString\(\)/g, 'Number(remaining || 0).toLocaleString()');

fs.writeFileSync('src/components/InvoicePrint.tsx', content);
console.log('Patched InvoicePrint');
