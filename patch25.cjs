const fs = require('fs');
let content = fs.readFileSync('src/pages/Settings.tsx', 'utf8');

// The messed up part in the dark mode toggle is:
// onClick={toggleDarkMode}
// dir="ltr" className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#2563EB] focus:outline-none text-right"
// role="switch"

content = content.replace(/dir="ltr" className="w-full border border-\[#E2E8F0\] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-\[#2563EB\] focus:outline-none text-right"\s*role="switch"/g, 'dir="ltr"\n                  role="switch"');

fs.writeFileSync('src/pages/Settings.tsx', content);
console.log('Fixed messed up dark mode toggle');
