const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Layout.tsx', 'utf8');

content = content.replace("import { Outlet } from 'react-router-dom';", "import { Outlet, useLocation } from 'react-router-dom';\nimport { motion, AnimatePresence } from 'motion/react';");

content = content.replace("const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);", "const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const location = useLocation();");

const oldMain = `<main className="flex-1 p-3.5 sm:p-5 md:p-8 pb-24 md:pb-8 print:p-0 overflow-y-auto print:overflow-visible print:h-auto space-y-4 sm:space-y-6 print:space-y-0 no-scrollbar">
          <Outlet />
        </main>`;

const newMain = `<main className="flex-1 p-3.5 sm:p-5 md:p-8 pb-24 md:pb-8 print:p-0 overflow-y-auto print:overflow-visible print:h-auto space-y-4 sm:space-y-6 print:space-y-0 no-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>`;

content = content.replace(oldMain, newMain);

fs.writeFileSync('src/components/layout/Layout.tsx', content);
console.log('Patched Layout with motion');
