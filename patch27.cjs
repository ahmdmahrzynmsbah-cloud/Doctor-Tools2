const fs = require('fs');
let content = fs.readFileSync('src/pages/Suppliers.tsx', 'utf8');

content = content.replace(/const itemPrice = item\.price \?\? item\.unitPrice \?\? 0;/g, 'const itemPrice = (item as any).price ?? (item as any).unitPrice ?? 0;');

fs.writeFileSync('src/pages/Suppliers.tsx', content);
console.log('Fixed unitPrice lint error in Suppliers.tsx');
