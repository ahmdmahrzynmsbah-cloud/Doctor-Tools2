const fs = require('fs');
let content = fs.readFileSync('src/components/ProductSearchSelect.tsx', 'utf8');

content = content.replace(/filteredItems\.map\(\(item\) => \{/g, 'filteredItems.map((item, idx) => {');
content = content.replace(/key=\{item\.id\}/g, 'key={item.id ? `product-search-${item.id}` : `product-search-idx-${idx}`}');

fs.writeFileSync('src/components/ProductSearchSelect.tsx', content);
console.log('Patched ProductSearchSelect keys');
