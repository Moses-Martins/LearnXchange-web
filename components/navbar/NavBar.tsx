'use client';
import Link from 'next/link';


type NavBarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

export default function NavBar({ isMenuOpen, setIsMenuOpen }: NavBarProps) {
  const navItems: string[] = ['Explore', 'Feed', 'Learn', 'Exchange', 'Community'];
  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-10">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className={`text-gray-700 font-semibold hover:text-orange-600 transition duration-150 ease-in-out ${item === 'Explore'
              ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
              : ''
              }`}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="flex lg:hidden items-center justify-between">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            {isMenuOpen  ? (
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
      </div>
    </nav>
  );
}
