import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-light dark:bg-surface-dark py-4 px-8 text-center border-t border-background-light dark:border-background-dark mt-auto">
      <div className="max-w-5xl mx-auto text-textSecondary-light dark:text-textSecondary-dark text-sm">
        <p>© 2025 Jason Thao. All rights reserved.</p>
        <p className="mt-1 text-xs">The JT logo cannot be reused without explicit permission.</p>
      </div>
    </footer>
  );
};

export default Footer;