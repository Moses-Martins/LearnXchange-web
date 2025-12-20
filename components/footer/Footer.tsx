import Image from 'next/image';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from "react-icons/ri";


export default function Footer() {
    return (
        <footer className="bg-black text-white pt-12 pb-8 px-6 md:px-12 lg:px-16 border-t border-zinc-800">
            <div className="max-w-[1350px] mx-auto">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5 md:gap-12 lg:gap-16">

                    <div className="sm:col-span-2 md:col-span-1">
                        <a href="#">
                            <Image
                            src="/logo-white.png"
                            alt="Logo"
                            width={500}
                            height={500}
                            priority
                            className="w-auto h-12 mb-4"
                        />
                        </a>
                        <p className="text-sm text-zinc-400 max-w-xs">
                            The social platform for skill sharing. Connect with passionate learners and teachers worldwide.
                        </p>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Platform</h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><a href="#" className="hover:text-white transition duration-150">Explore</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Feed</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Learn</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Exchange</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Community</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><a href="#" className="hover:text-white transition duration-150">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Safety Guideline</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Community Guideline</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Tutorial Library</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><a href="#" className="hover:text-white transition duration-150">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Copyright Policy</a></li>
                            <li><a href="#" className="hover:text-white transition duration-150">Accessibility</a></li>
                        </ul>
                    </div>

                    <div className="sm:col-span-2 md:col-span-1 flex justify-center space-x-5 md:space-x-0 md:flex-col md:justify-start sm:items-start space-y-3">
                        <a href="#" className="transition duration-150">
                          
                            <Image
                                src="/footer-apple.png"
                                alt="App Store"
                                width={500}
                                height={500}
                                priority
                                className="w-full max-w-[140px]"
                            />

                        </a>

                        <a href="#" className="transition duration-150">
                            <Image
                                src="/footer-play.png"
                                alt="Google Play"
                                width={500}
                                height={500}
                                priority
                                className="w-full max-w-[140px]"
                            />
                        </a>
                    </div>
                </div>

                <hr className="border-zinc-800 my-8" />

                <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between md:items-center text-sm text-zinc-400">
                    <p className="order-1 mt-4 md:mt-0">&copy; 2026 LearnXchange. All rights reserved.</p>

                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-purple-600 text-white bg-purple-700 rounded-sm p-1 transition duration-150">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-purple-600 text-white bg-purple-700 rounded-sm p-1 transition duration-150">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-purple-600 text-white bg-purple-700 rounded-sm p-1 transition duration-150">
                            <RiInstagramFill className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-purple-600 text-white bg-purple-700 rounded-sm p-1 transition duration-150">
                            <FaXTwitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )

}

