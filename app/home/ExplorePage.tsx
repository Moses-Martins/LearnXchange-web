import { MapPin, Search, TrendingUp, Video, Zap } from 'lucide-react';

// Define a type for the filter buttons for better type safety
interface FilterButtonProps {
    icon: React.ReactNode;
    text: string;
    extraColor: string;
}

const FilterButton = ({ icon, text, extraColor }: FilterButtonProps) => (
    <button className={`flex items-center px-4 py-2 text-sm rounded-full text-purple-600 shadow-lg transition-all duration-300 hover:scale-[1.03] ${extraColor}`}>
        {icon}
        <span className="ml-2 font-medium">{text}</span>
    </button>
);

export default function Explore() {
    return (
        <div className="max-w-[1350px] mx-auto relative h-[400px] sm:h-[650px] overflow-hidden">
            {/* Background Image/Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center mt-10"
                style={{
                    backgroundImage: "url('/hero-image.png')",
                    filter: 'grayscale(10%) blur(2px)',
                    transform: 'scale(1)',
                }}
            ></div>

            {/* Purple Gradient Overlay */}
            <div className="absolute inset-0 bg-purple-900/50 backdrop-brightness-75"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center max-sm:mt-20 sm:h-full text-center text-white p-4">
                {/* Title and Description */}
                <h1 className="text-2xl sm:text-4xl font-extrabold mb-1 sm:mb-4 sm:mt-16 drop-shadow-lg">
                    Explore the World of Skills
                </h1>
                <p className="text-base sm:text-2xl font-light mb-5 sm:mb-10 max-w-2xl drop-shadow">
                    Discover thousand of Skills, Connect with expert teachers and start your learning journey today
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-xl mb-4 sm:mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for any skills you want to learn..."
                            className="bg-white w-full py-2 sm:py-4 pl-12 pr-6 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-400/50 transition duration-300 shadow-xl placeholder-transparent sm:placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Mobile: single container */}
                <div className="sm:hidden">
                    <div className="flex justify-center gap-2">
                        <FilterButton
                            icon={<TrendingUp className="w-5 h-5" />}
                            text="Trending Now"
                            extraColor="text-white bg-orange-500 hover:bg-orange-600"
                        />
                        <FilterButton
                            icon={<Zap className="w-5 h-5" />}
                            text="I want to learn..."
                            extraColor="bg-white hover:bg-purple-700 hover:text-white"
                        />
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <FilterButton
                            icon={<Zap className="w-5 h-5 transform rotate-180" />}
                            text="I can Teach..."
                            extraColor="bg-white hover:bg-purple-700 hover:text-white"
                        />
                        <FilterButton
                            icon={<MapPin className="w-5 h-5" />}
                            text="Near me"
                            extraColor="bg-white hover:bg-purple-600 hover:text-white"
                        />
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <FilterButton
                            icon={<Video className="w-5 h-5" />}
                            text="Online Session"
                            extraColor="bg-white hover:bg-purple-600 hover:text-white"
                        />
                    </div>
                </div>

                {/* Desktop: split containers */}
                <div className="hidden sm:block">
                    <div className="flex justify-center gap-3">
                        <FilterButton
                            icon={<TrendingUp className="w-5 h-5" />}
                            text="Trending Now"
                            extraColor="text-white bg-orange-500 hover:bg-orange-600"
                        />
                        <FilterButton
                            icon={<Zap className="w-5 h-5" />}
                            text="I want to learn..."
                            extraColor="bg-white hover:bg-purple-700 hover:text-white"
                        />
                        <FilterButton
                            icon={<Zap className="w-5 h-5 transform rotate-180" />}
                            text="I can Teach..."
                            extraColor="bg-white hover:bg-purple-700 hover:text-white"
                        />
                    </div>

                    <div className="flex justify-center gap-3 mt-4">
                        <FilterButton
                            icon={<MapPin className="w-5 h-5" />}
                            text="Near me"
                            extraColor="bg-white hover:bg-purple-600 hover:text-white"
                        />
                        <FilterButton
                            icon={<Video className="w-5 h-5" />}
                            text="Online Session"
                            extraColor="bg-white hover:bg-purple-600 hover:text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
