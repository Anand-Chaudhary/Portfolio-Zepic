import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const pages = [
    { id: 'intro', label: 'HOME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 dark-glass border-b dark-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-8 h-8 dark-button rounded-lg dark-glow"></div>
            <span className="text-xl font-black dark-text-primary tracking-wider">NEXTGEN</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {pages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(page.id)}
                  className={`px-4 py-2 tracking-wide transition-all duration-300 ${
                    activeSection === page.id
                      ? 'dark-button dark-text-primary dark-glow'
                      : 'dark-text-secondary hover:dark-text-primary hover:bg-dark-gray-800'
                  }`}
                >
                  {page.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}