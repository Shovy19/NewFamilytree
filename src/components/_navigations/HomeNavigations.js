import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png'

const HomeNavigations = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-800 p-4 flex justify-between items-center">
      {/* Left side: Logo and Name */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" width={20} height={20} className="w-10 h-10 mr-2" />
        <Link to="/" className="text-white font-bold text-lg">
          Family tree
        </Link>
      </div>

      {/* Right side: Navigation links for desktop */}
      <div className="hidden md:flex space-x-[1px]">
        <Link to="/" className="text-white bg-slate-500 px-7 py-1 rounded-sm ">
          Home
        </Link>
        <Link to="/about" className="text-white hover:bg-slate-500 px-7 py-1 rounded-sm">
          About
        </Link>
        <Link to="/family" className="text-white hover:bg-slate-500 px-7 py-1 rounded-sm">
          Family
        </Link>
        
      </div>

      {/* Mobile menu icon for small screens */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu for small screens */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute grid top-16 right-4 bg-slate-700 rounded-md p-2 space-y-2">
          <Link
            to="/"
            className="text-white hover:bg-slate-500 px-7 rounded-sm"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-slate-500 px-7 rounded-sm"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/family"
            className="text-white hover:bg-slate-500 px-7 rounded-sm"
            onClick={toggleMobileMenu}
          >
            Family
          </Link>
        </div>
      )}
    </nav>
  );
};

export default HomeNavigations;
