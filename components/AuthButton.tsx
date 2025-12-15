'use client';
import Link from 'next/link';
import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { IoMdLogIn } from 'react-icons/io';

export default function AuthMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Desktop Auth Buttons */}
      <div className="hidden sm:flex items-center space-x-3">
        <Link href="/login">
          <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition">
            Sign in
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            Sign up
          </button>
        </Link>
      </div>

      {/* Mobile Auth Toggle */}
      <div className="flex sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600"
          aria-label="Auth menu"
        >
          {isOpen ? <HiX size={24} /> : <IoMdLogIn size={24} />}
        </button>
      </div>

      {/* Mobile Auth Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-lg flex flex-col z-50 sm:hidden">
          <Link
            href="/signin"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-left text-gray-700 hover:bg-purple-50"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-left text-gray-700 hover:bg-purple-50"
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}
