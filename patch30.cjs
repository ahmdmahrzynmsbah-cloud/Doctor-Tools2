const fs = require('fs');
const pages = [
  'src/pages/Inventory.tsx',
  'src/pages/Customers.tsx',
  'src/pages/Suppliers.tsx',
  'src/pages/Invoices.tsx',
  'src/pages/Dashboard.tsx'
];

for (const page of pages) {
  let content = fs.readFileSync(page, 'utf8');
  content = content.replace("import React\nimport { motion, AnimatePresence } from 'motion/react';,", "import React,");
  // ensure we have motion import at the top
  if (!content.includes("import { motion")) {
    content = "import { motion, AnimatePresence } from 'motion/react';\n" + content;
  }
  
  fs.writeFileSync(page, content);
}
console.log('Fixed imports');
