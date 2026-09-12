const fs = require('fs');
let content = fs.readFileSync('src/pages/Customers.tsx', 'utf8');

content = content.replace(/row\.debit\.toLocaleString\(\)/g, 'Number(row.debit || 0).toLocaleString()');
content = content.replace(/row\.credit\.toLocaleString\(\)/g, 'Number(row.credit || 0).toLocaleString()');
content = content.replace(/Math\.abs\(row\.balance\)\.toLocaleString\(\)/g, 'Math.abs(Number(row.balance || 0)).toLocaleString()');
content = content.replace(/Math\.abs\(selectedCustomer\.balance\)\.toLocaleString\(\)/g, 'Math.abs(Number(selectedCustomer.balance || 0)).toLocaleString()');

fs.writeFileSync('src/pages/Customers.tsx', content);
console.log('Patched Customers again');
