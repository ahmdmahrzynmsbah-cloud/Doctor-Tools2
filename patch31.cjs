const fs = require('fs');

const pages = [
  'src/pages/Inventory.tsx',
  'src/pages/Customers.tsx',
  'src/pages/Suppliers.tsx',
  'src/pages/Invoices.tsx',
  'src/pages/Dashboard.tsx',
  'src/components/InvoicePrint.tsx'
];

for (const page of pages) {
  if (!fs.existsSync(page)) continue;
  let content = fs.readFileSync(page, 'utf8');
  
  // To fix it, I'll replace all <motion.tr that don't have initial= back to <tr and </motion.tr> back to </tr>
  // Wait, my regex was:
  // content.replace(/<tr key=\{/g, '<motion.tr\n ... key={');
  // So opening tags with key={ became <motion.tr ...
  // Opening tags without key={ are still <tr ...
  
  // It's easier to find closing tags and make them match. But JSX is nested.
  // Actually, let's just restore from original if we have it, or fix it manually.
  // We can just find <tr> and replace its matching </tr>. 
  // Since I don't have an AST parser, I'll just change </motion.tr> back to </tr> globally, 
  // and then change it to </motion.tr> ONLY if it's the closing tag of the <motion.tr> I added.
  
  content = content.replace(/<\/motion\.tr>/g, '</tr>');
  
  // Now, how to change </tr> to </motion.tr> for the ones that actually have <motion.tr ... ?
  // Usually, in these maps, it's something like:
  /*
     <motion.tr ...>
       <td>...</td>
       ...
     </tr>
  */
  // I can just replace `</tr>\n                ) : (` with `</motion.tr>\n                ) : (` or whatever it looks like, but it's risky.
  // Better yet, I can write a script to balance tags.
  let result = '';
  let i = 0;
  let inMotionTr = 0;
  
  // Actually, a simpler way is to just use regex to replace `<motion.tr[^]*?</tr>` ? No, because of nested stuff (which tr shouldn't have).
  // tr cannot contain another tr. So `<motion.tr` until `</tr>` can be replaced with `</motion.tr>`.
  content = content.replace(/<motion\.tr([\s\S]*?)<\/tr>/g, '<motion.tr$1</motion.tr>');
  
  fs.writeFileSync(page, content);
}
console.log('Fixed unmatched tags');
