const fs = require('fs');
let content = fs.readFileSync('src/pages/Settings.tsx', 'utf8');

content = content.replace(/className="w-full border border-\[#E2E8F0\] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-\[#2563EB\] focus:outline-none text-right" dir="auto"\s*dir="ltr" className="w-full border border-\[#E2E8F0\] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-\[#2563EB\] focus:outline-none text-right"/g, 'className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#2563EB] focus:outline-none text-right" dir="auto"');

fs.writeFileSync('src/pages/Settings.tsx', content);
console.log('Fixed duplicate attributes in phone input');
