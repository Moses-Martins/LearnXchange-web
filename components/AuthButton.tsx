'use client';
import Link from 'next/link';
import { useState } from 'react';

interface AuthButtonProps {
    variant: "desktop" | "mobile";
}

export default function AuthButton({ variant }: AuthButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Desktop Auth Buttons */}
      {variant === "desktop" && (
      <div className="hidden sm:flex items-center space-x-3">
        <Link href="/signin">
          <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition">
            Sign in
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-4 py-2 text-white bg-purple-600 border border-purple-600 rounded-lg hover:bg-purple-700 transition">
            Sign up
          </button>
        </Link>
      </div>
      )}

      {/* Mobile Auth Toggle */}
      {variant === "mobile" && (<div className="flex flex-col gap-y-3 sm:hidden mt-10">
        <Link href="/signin" className="order-2">
          <button className="px-6 py-2 w-full text-purple-600 border border-purple-600 rounded-3xl hover:bg-purple-50 transition">
            Sign in
          </button>
        </Link>

        <Link href="/signup" className="order-1">
          <button className="px-6 py-2 w-full text-white bg-purple-600 border border-purple-600 rounded-3xl hover:bg-purple-700 transition">
            Sign up
          </button>
        </Link>
      </div>
      )}
    </div>
  );
}
