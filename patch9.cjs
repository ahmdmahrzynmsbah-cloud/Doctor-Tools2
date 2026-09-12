const fs = require('fs');
let content = fs.readFileSync('src/pages/Suppliers.tsx', 'utf8');

content = content.replace(/filteredSuppliers\.map\(\(supplier\) => \(/g, 'filteredSuppliers.map((supplier, idx) => (');
content = content.replace(/key=\{supplier\.id\}/g, 'key={supplier.id ? `supplier-${supplier.id}` : `supplier-idx-${idx}`}');
content = content.replace(/key=\{`\$\{row\.id\}-\$\{idx\}`\}/g, "key={row.id ? `row-${row.id}-${idx}` : `row-idx-${idx}`}");
content = content.replace(/key=\{idx\}/g, "key={`purchase-item-${idx}`}");

fs.writeFileSync('src/pages/Suppliers.tsx', content);
console.log('Patched keys in Suppliers');
