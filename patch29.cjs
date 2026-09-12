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
  if (!content.includes("import { motion")) {
    content = content.replace("import React", "import React\nimport { motion, AnimatePresence } from 'motion/react';");
  }
  
  // Replace <tbody ...> with <AnimatePresence> <tbody ...> if possible, or just change <tr key=... to <motion.tr
  // It's easier to just use <motion.tr
  content = content.replace(/<tr key=\{/g, '<motion.tr\n                          initial={{ opacity: 0, y: 10 }}\n                          animate={{ opacity: 1, y: 0 }}\n                          exit={{ opacity: 0 }}\n                          transition={{ duration: 0.15, delay: idx * 0.02 }}\n                          key={');
  content = content.replace(/<\/tr>/g, '</motion.tr>');
  
  // Clean up <motion.tr for simple headers that were just <tr> 
  // Wait, if it didn't have 'key={', it didn't get replaced, which is good! The headers usually are just <tr> without key
  fs.writeFileSync(page, content);
}
console.log('Patched tables with motion.tr');
