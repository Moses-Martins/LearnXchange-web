import Image from 'next/image';
import { ReactNode } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="w-full max-w-[1350px] mx-auto bg-white flex max-sm:flex-col max-sm:pb-18">

        {/* Desktop Image */}
        <Image
          src="/auth-hero-image-desktop.png"
          alt="Desktop image"
          width={500} // Intrinsic aspect ratio for desktop
          height={500}
          priority
          // Hide on mobile (sm breakpoint and below), show on desktop
          className="hidden sm:block w-1/2 h-auto"
        />

        {/* Mobile Image */}
        <Image
          src="/auth-hero-image-mobile.png" 
          alt="Mobile image"
          width={500} // Intrinsic aspect ratio for mobile
          height={500}
          priority
          // Show on mobile (sm breakpoint and below), hide on desktop
          className="block sm:hidden w-full h-auto"
        />

        <div className="w-full sm:w-1/2 bg-white flex flex-col justify-center items-center text-center">

          <div className="w-full max-w-lg min-w-[350px] p-6 space-y-3">
            {children}
          </div>

          <div className="relative my-4 w-full max-w-xs sm:max-w-lg">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-400"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <p className="text-xs text-purple-700 mb-4">CONTINUE WITH</p>

          <div className="flex justify-between w-full max-w-[240px] sm:max-w-xs space-x-3">
            <button className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-3xl hover:bg-gray-50 transition duration-150">
              <FcGoogle  size={24} />
              <span className="pl-2">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-3xl hover:bg-gray-50 transition duration-150">
              <FaApple size={24}/>
              <span className="pl-2">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </>

  );
}