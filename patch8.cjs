const fs = require('fs');
let content = fs.readFileSync('src/pages/Customers.tsx', 'utf8');

content = content.replace(/filteredCustomers\.map\(\(customer\) => \(/g, 'filteredCustomers.map((customer, idx) => (');
content = content.replace(/key=\{customer\.id\}/g, 'key={customer.id ? `customer-${customer.id}` : `customer-idx-${idx}`}');
content = content.replace(/key=\{`\$\{row\.id\}-\$\{idx\}`\}/g, "key={row.id ? `row-${row.id}-${idx}` : `row-idx-${idx}`}");

fs.writeFileSync('src/pages/Customers.tsx', content);
console.log('Patched keys in Customers');
