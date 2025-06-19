import React, { useState } from 'react';
import { Typography } from '@/components/ui';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#' }, 
    { label: 'Events', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-md relative z-50">
      <div className="flex items-center">
        <Typography variant="h5" weight="bold" color="accent" className="text-blue-600">
          Innovation Lab.
        </Typography>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:underline">
                <Typography variant="body1" weight="medium" className="!text-black">
                  {link.label}
                </Typography>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-md hover:bg-gray-100">
                  <Typography variant="body1" weight="medium" className="!text-black">
                    {link.label}
                  </Typography>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;