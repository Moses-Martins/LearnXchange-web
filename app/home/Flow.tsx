import Image from 'next/image';

export default function Flow() {
    return (

        <section className="max-w-[1350px] mx-auto bg-gradient-to-r from-purple-800 via-violet-600 to-orange-500 text-white py-12 px-6 md:py-20">
                <h2 className="text-xl sm:text-3xl font-extrabold text-center mb-12">
                    How LearnXchange Works
                </h2>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                    <div className="flex flex-col md:w-1/4 relative">
                        <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white text-violet-700 text-2xl md:text-3xl font-bold shadow-2xl shadow-purple-900/50 mb-4">
                            1
                        </div>
                    
                        <Image
                            src="/arrow-right.svg"
                            alt="right arrow"
                            width={500} 
                            height={500}
                            priority
                            className="hidden md:block md:top-6 md:left-[-30] absolute lg:top-4 lg:left-[-70] w-1/2 transform translate-x-full"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">Create Profile</h3>
                        <p className="text-base text-violet-100">
                            Sign up and tell us what you want to learn and what you can teach. Build your learning identity.
                        </p>
                    </div>

                    <div className="flex flex-col md:w-1/4 relative">
                        <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white text-violet-700 text-2xl md:text-3xl font-bold shadow-2xl shadow-purple-900/50 mb-4">
                            2
                        </div>
                         <Image
                            src="/arrow-right.svg"
                            alt="right arrow"
                            width={500} 
                            height={500}
                            priority
                            className="hidden md:block md:top-6 md:left-[-30] absolute lg:top-4 lg:left-[-70] w-1/2 transform translate-x-full"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">Explore & Connect</h3>
                        <p className="text-base text-violet-100">
                            Browse tutorials, discover teachers, and connect with learners who share your interests.
                        </p>

                    </div>

                    <div className="flex flex-col md:w-1/4 relative">
                        <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white text-violet-700 text-2xl md:text-3xl font-bold shadow-2xl shadow-purple-900/50 mb-4">
                            3
                        </div>
                         <Image
                            src="/arrow-right.svg"
                            alt="right arrow"
                            width={500} 
                            height={500}
                            priority
                            className="hidden md:block md:top-6 md:left-[-30] absolute lg:top-4 lg:left-[-70] w-1/2 transform translate-x-full"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">Exchange Skills</h3>
                        <p className="text-base text-violet-100">
                            Propose exchanges, schedule sessions, and start learning. Teach what you know, learn what you love.
                        </p>

                    </div>

                    <div className="flex flex-col md:w-1/4 relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white text-violet-700 text-2xl md:text-3xl font-bold shadow-2xl shadow-purple-900/50 mb-4">
                            4
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">Grow Together</h3>
                        <p className="text-base text-violet-100">
                            Share your progress, earn badges, build your portfolio, and inspire others in the community.
                        </p>
                    </div>
                </div>
        </section>
    )

}
