"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from "react";
import AuthButton from "./AuthButton";
import NavBar from "./navbar/NavBar";
import NavBarMenuLinks from './navbar/NavBarMenuLinks';
import SearchBar from './SearchBar';

type HeaderLayoutProps = {
    children: ReactNode;
};


export default function WrapperLayout({ children }: HeaderLayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header className="bg-white backdrop-blur-sm shadow-sm fixed w-full z-40 overflow-visible">
                <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                    {/* Navbar */}
                    <div className="order-1 lg:order-2">
                        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    </div>

                    {/* Logo */}
                    <div className={`flex items-center justify-center order-2 lg:order-1`}>
                        <Link href="#">
                            <Image
                                src="/logo-purple.png"
                                alt="Logo"
                                width={500}
                                height={500}
                                priority
                                className="w-50 h-auto"
                            />
                        </Link>
                    </div>

                    <div className="hidden sm:block sm:order-3">
                        <AuthButton variant="desktop" />
                    </div>

                    <div className="order-3 sm:hidden">
                        <SearchBar variant="mobile" />
                    </div>
                </div>
            </header>
            {/* Mobile Menu & Backdrop */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/30 z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Slide-in Menu */}
                    <div
                        className={`fixed top-0 left-0 h-3/4 p-2 pt-12 w-64 rounded-r-xl bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <NavBarMenuLinks closeMenu={() => setIsMenuOpen(false)} />
                    </div>
                </>
            )}
            <main className="min-w-[380px]">
                {children}
            </main>



        </>

    );
}