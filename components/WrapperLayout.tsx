import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from "react";
import AuthButton from "./AuthButton";
import NavBar from "./navbar/NavBar";

type HeaderLayoutProps = {
    children: ReactNode;
};


export default function WrapperLayout({ children }: HeaderLayoutProps) {
    return (
        <>
            <header className="bg-white backdrop-blur-sm shadow-sm fixed w-full z-50">
                <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                    {/* Navbar */}
                    <div className="order-1 lg:order-2">
                        <NavBar />
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

                    
                        <div className="order-3">
                            <AuthButton />
                        </div>
                    

                </div>
            </header>
            <main className="min-w-[380px]">
                {children}
            </main>



        </>

    );
}