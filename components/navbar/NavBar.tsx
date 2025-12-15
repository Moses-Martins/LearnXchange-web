'use client';
import { useState } from 'react';

const navItems: string[] = ['Explore', 'Feed', 'Learn', 'Exchange', 'Community'];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-10">
        {navItems.map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className={`text-gray-600 font-semibold hover:text-orange-600 transition duration-150 ease-in-out ${
              item === 'Explore'
                ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                : ''
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="flex lg:hidden items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // X icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo or Brand can go here if needed */}
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-auto bg-white shadow-md flex flex-col p-2 z-20">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-4 py-2 text-gray-600 hover:text-purple-600 border-b border-gray-200"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
