const fs = require('fs');
let content = fs.readFileSync('src/components/ProductSearchSelect.tsx', 'utf8');

content = content.replace(/item\.purchasePrice\.toLocaleString\(\)/g, 'Number(item.purchasePrice || 0).toLocaleString()');

fs.writeFileSync('src/components/ProductSearchSelect.tsx', content);
console.log('Patched ProductSearchSelect');
