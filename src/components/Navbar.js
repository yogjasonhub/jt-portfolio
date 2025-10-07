import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../hooks/useTheme';
import { useScrollDirection } from '../hooks/useScrollDirection';
import circuitLogo from '../assets/logos/circuit-cream-JT.png';

const Navbar = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const scrollDirection = useScrollDirection();

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      bg-background-light dark:bg-background-dark
      shadow-md
      border-gray-200 dark:border-gray-800 border-b
      transform transition-transform duration-300
      ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
      py-2
    `}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center">
        {/* Logo on the left */}
        <div className="flex-shrink-0 -ml-2 sm:ml-0">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="cursor-pointer"
          >
            <img 
              src={circuitLogo} 
              alt="JT Circuit Logo" 
              className="h-12 sm:h-14 w-auto brightness-90 dark:brightness-100 hover:opacity-80 transition-all duration-200 transform hover:scale-110"
            />
          </Link>
        </div>

        {/* Navigation links centered */}
        <div className="flex-grow flex justify-center items-center space-x-4 sm:space-x-8 mx-4 sm:mx-8">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm sm:text-base text-text-light dark:text-text-dark hover:text-primary transition-all duration-200 cursor-pointer transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm sm:text-base text-text-light dark:text-text-dark hover:text-primary transition-all duration-200 cursor-pointer transform hover:scale-110"
          >
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm sm:text-base text-text-light dark:text-text-dark hover:text-primary transition-all duration-200 cursor-pointer transform hover:scale-110"
          >
            Contact
          </Link>
        </div>

        {/* Theme toggle on the right */}
        <div className="flex-shrink-0 -mr-2 sm:mr-0">
          <button 
            onClick={toggleTheme}
            className="bg-transparent border-none cursor-pointer p-2 text-lg sm:text-xl hover:opacity-80 transition-opacity"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;