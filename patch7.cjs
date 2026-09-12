const fs = require('fs');
let content = fs.readFileSync('src/pages/Suppliers.tsx', 'utf8');

content = content.replace(/row\.rawPurchase\.Number\(total \|\| 0\)\.toLocaleString\(\)/g, 'Number(row.rawPurchase.total || 0).toLocaleString()');
content = content.replace(/row\.rawPurchase\.Number\(paid \|\| 0\)\.toLocaleString\(\)/g, 'Number(row.rawPurchase.paid || 0).toLocaleString()');
content = content.replace(/printingPurchase\.Number\(total \|\| 0\)\.toLocaleString\(\)/g, 'Number(printingPurchase.total || 0).toLocaleString()');
content = content.replace(/printingPurchase\.Number\(paid \|\| 0\)\.toLocaleString\(\)/g, 'Number(printingPurchase.paid || 0).toLocaleString()');

fs.writeFileSync('src/pages/Suppliers.tsx', content);
console.log('Patched Suppliers bad regex');
