'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    if (!loaded) {
      setLoaded(true);
      setTimeout(() => {
        router.push('/home');
      }, 2000); // 2-second splash
    }
  };

  return (
    <div className="relative w-screen h-screen">
      {/* Desktop Image */}
      <div className="hidden sm:block w-full h-full relative">
        <Image
          src="/desktop-onboarding.png"
          alt="Desktop image"
          fill
          style={{ objectFit: 'cover' }} // fills the container
          priority
          onLoad={handleLoad}
        />
      </div>

      {/* Mobile Image */}
      <div className="block sm:hidden w-full h-full relative">
        <Image
          src="/mobile-onboarding.png"
          alt="Mobile image"
          fill
          style={{ objectFit: 'cover' }} // fills the container
          priority
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
}
