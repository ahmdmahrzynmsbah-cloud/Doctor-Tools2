const fs = require('fs');
let content = fs.readFileSync('src/pages/Settings.tsx', 'utf8');

// Force all text inputs to align right so it matches the label in RTL
content = content.replace(/className="w-full border border-\[#E2E8F0\] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-\[#2563EB\] focus:outline-none"/g, 'className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#2563EB] focus:outline-none text-right" dir="auto"');

// For the phone input, we had replaced it with dir="ltr" style={{textAlign: "right"}}, let's make it text-right and dir="ltr"
content = content.replace(/dir="ltr" style=\{\{ textAlign: "right" \}\}/g, 'dir="ltr" className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-[#2563EB] focus:outline-none text-right"');

fs.writeFileSync('src/pages/Settings.tsx', content);
console.log('Patched Settings inputs alignment');
