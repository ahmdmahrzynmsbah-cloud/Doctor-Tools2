const fs = require('fs');
let content = fs.readFileSync('src/pages/Settings.tsx', 'utf8');

// Replace whitespace-nowrap with whitespace-normal on the 4 buttons
content = content.replace(/cursor-pointer whitespace-nowrap/g, 'cursor-pointer whitespace-normal md:whitespace-nowrap lg:whitespace-normal text-right');

// Fix inputs in profile
content = content.replace(/dir="ltr"/g, 'dir="ltr" style={{ textAlign: "right" }}');

// Save
fs.writeFileSync('src/pages/Settings.tsx', content);
console.log('Patched Settings inputs');
