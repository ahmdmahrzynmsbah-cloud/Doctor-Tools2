const fs = require('fs');
let content = fs.readFileSync('src/pages/Suppliers.tsx', 'utf8');

content = content.replace(/\(item\.quantity \* itemPrice\)\.toLocaleString\(\)/g, 'Number((item.quantity || 0) * (itemPrice || 0)).toLocaleString()');
content = content.replace(/price\.toLocaleString\(\)/g, 'Number(price || 0).toLocaleString()');
content = content.replace(/\(qty \* price\)\.toLocaleString\(\)/g, 'Number((qty || 0) * (price || 0)).toLocaleString()');
content = content.replace(/total\.toLocaleString\(\)/g, 'Number(total || 0).toLocaleString()');
content = content.replace(/paid\.toLocaleString\(\)/g, 'Number(paid || 0).toLocaleString()');
content = content.replace(/\(total - paid\)\.toLocaleString\(\)/g, 'Number((total || 0) - (paid || 0)).toLocaleString()');
content = content.replace(/row\.credit\.toLocaleString\(\)/g, 'Number(row.credit || 0).toLocaleString()');
content = content.replace(/row\.debit\.toLocaleString\(\)/g, 'Number(row.debit || 0).toLocaleString()');
content = content.replace(/Math\.abs\(row\.balance\)\.toLocaleString\(\)/g, 'Math.abs(Number(row.balance || 0)).toLocaleString()');
content = content.replace(/row\.rawPurchase\.total\.toLocaleString\(\)/g, 'Number(row.rawPurchase.total || 0).toLocaleString()');
content = content.replace(/row\.rawPurchase\.paid\.toLocaleString\(\)/g, 'Number(row.rawPurchase.paid || 0).toLocaleString()');
content = content.replace(/\(row\.rawPurchase\.total - row\.rawPurchase\.paid\)\.toLocaleString\(\)/g, 'Number((row.rawPurchase.total || 0) - (row.rawPurchase.paid || 0)).toLocaleString()');
content = content.replace(/purchaseItems\.reduce\(\(sum, item\) => sum \+ \(item\.qty \* item\.cost\), 0\)\.toLocaleString\(\)/g, 'Number(purchaseItems.reduce((sum, item) => sum + ((item.qty || 0) * (item.cost || 0)), 0)).toLocaleString()');
content = content.replace(/unitPrice\.toLocaleString\(\)/g, 'Number(unitPrice || 0).toLocaleString()');
content = content.replace(/\(item\.quantity \* unitPrice\)\.toLocaleString\(\)/g, 'Number((item.quantity || 0) * (unitPrice || 0)).toLocaleString()');
content = content.replace(/printingPurchase\.total\.toLocaleString\(\)/g, 'Number(printingPurchase.total || 0).toLocaleString()');
content = content.replace(/printingPurchase\.paid\.toLocaleString\(\)/g, 'Number(printingPurchase.paid || 0).toLocaleString()');
content = content.replace(/\(printingPurchase\.total - printingPurchase\.paid\)\.toLocaleString\(\)/g, 'Number((printingPurchase.total || 0) - (printingPurchase.paid || 0)).toLocaleString()');


fs.writeFileSync('src/pages/Suppliers.tsx', content);
console.log('Patched Suppliers');
