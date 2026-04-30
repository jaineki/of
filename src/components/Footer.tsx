// src/components/Footer.tsx
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Selov Asx. All rights reserved.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-red-500" /> Selov Asx
        </p>
      </div>
    </footer>
  );
};

export default Footer;
