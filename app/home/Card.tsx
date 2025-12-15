import Image from 'next/image';
import React from 'react';

// Define the structure for the course data
export interface Course {
    title: string;
    learners: number;
    tutorials: number;
    duration: number;
    tutorName: string;
    tutorImage: string;
}

// Define the component's props
interface CourseCardProps {
    course: Course;
}

// --- Icon Placeholders (same as before) ---
const UsersIcon = () => (
    <Image src="/people-icon.png" alt="people" width={500} height={500} priority className="w-5 h-5" />
);
const VideoIcon = () => (
    <Image src="/video-icon.png" alt="video" width={500} height={500} priority className="w-5 h-5" />
);
const ClockIcon = () => (
    <Image src="/clock-icon.png" alt="clock" width={500} height={500} priority className="w-5 h-5" />
);


// The functional component is typed using React.FC
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const { title, learners, tutorials, duration, tutorName, tutorImage } = course;

    return (
        <div className="relative w-70 bg-white rounded-xl overflow-hidden p-6 border border-gray-100">

            {/* Left Orange Accent Border */}
            <div className="absolute top-0 left-0 h-full w-2 bg-[#FF9374]"></div>

            <div className="pl-2">
                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    {title}
                </h1>

                {/* Stats List */}
                <ul className="space-y-4 mb-8">
                    {/* Active Learners */}
                    <li className="flex items-center space-x-3">
                        <UsersIcon />
                        <span className="text-gray-700">{learners.toLocaleString()} active learner</span>
                    </li>

                    {/* Tutorials Available */}
                    <li className="flex items-center space-x-3">
                        <VideoIcon />
                        <span className="text-gray-700">{tutorials} Tutorials available</span>
                    </li>

                    {/* Duration/Tutorials */}
                    <li className="flex items-center space-x-3">
                        <ClockIcon />
                        <span className="text-gray-700">{duration} Tutorials available</span>
                    </li>
                </ul>

                {/* Featured Tutor */}
                <div className="flex items-center space-x-4 mb-8">

                    <Image
                        src={tutorImage}
                        alt={`Featured Tutor ${tutorName}`}
                        width={500} // Intrinsic aspect ratio for desktop
                        height={500}
                        priority
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm text-gray-500">Featured Tutor</p>
                        <p className="text-lg font-semibold text-gray-800">{tutorName}</p>
                    </div>
                </div>

                {/* Call-to-Action Button */}
                <button className="w-full py-4 text-xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200 rounded-3xl shadow-lg shadow-purple-500/50">
                    Start Learning
                </button>
            </div>
        </div>
    );
};

export default CourseCard;