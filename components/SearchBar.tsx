"use client"
import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
    variant: "desktop" | "mobile";
}

export default function SearchBar({ variant }: SearchBarProps) {
    const [active, setActive] = useState(false);

    return (
        <>
            {/* Desktop version */}
            {variant === "desktop" && (
                <div className="w-full max-w-xl mb-4 sm:mb-8 hidden sm:block">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for any skills you want to learn..."
                            className="bg-white w-full py-4 pl-12 pr-6 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-400/50 shadow-xl"
                        />
                    </div>
                </div>
            )}

            {/* Mobile version */}
            {variant === "mobile" && (
                <form
                    className={`sm:hidden transition-all duration-300 ${active
                            ? "absolute inset-x-0 top-2 z-50 px-4 bg-white"
                            : ""
                        }`}
                >
                    <input
                        className="relative z-10 w-2 h-12 pl-12 cursor-pointer peer focus:w-full focus:pr-4 transition-all duration-300"
                        placeholder="Search for any skills you want to learn..."
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                    />

                    <div className="absolute inset-y-0 my-auto h-6 w-2 px-3.5">
                        <div className="flex items-center">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                </form>
            )}

        </>
    );
}
