const fs = require('fs');
let content = fs.readFileSync('src/pages/Settings.tsx', 'utf8');

// Fix sidebar width
content = content.replace(/className="w-full md:w-64 bg-\[#F8FAFC\] border-b md:border-b-0 md:border-l border-\[#E2E8F0\] p-3 md:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto"/, 'className="w-full md:w-72 lg:w-80 shrink-0 bg-[#F8FAFC] border-b md:border-b-0 md:border-l border-[#E2E8F0] p-3 md:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto"');

// Fix whitespace-nowrap in tabs
content = content.replace(/whitespace-nowrap/g, 'whitespace-normal md:whitespace-nowrap'); // Let it wrap on mobile if needed, or actually just remove it.
content = content.replace(/whitespace-normal md:whitespace-nowrap/g, 'whitespace-nowrap'); // Wait, let me just replace it manually.

fs.writeFileSync('src/pages/Settings.tsx', content);
