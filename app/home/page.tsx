import Explore from '@/app/home/ExplorePage';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import { Course, default as CourseCard } from './Card';
import Categories from './Categories';
import Flow from './Flow';
import Recommend from './Recommend';



const marketingCourse: Course = { // Type checking on the object itself
  title: 'Digital Marketing',
  learners: 2456,
  tutorials: 123,
  duration: 123,
  tutorName: 'Jacob John',
  tutorImage: '/card-icon.png',
};
const webDevCourse: Course = {
  title: 'Software Development',
  learners: 8901,
  tutorials: 45,
  duration: 350,
  tutorName: 'Alice Smith',
  tutorImage: '/card-icon.png',
};

const dataScienceCourse: Course = {
  title: 'Product Management',
  learners: 15320,
  tutorials: 98,
  duration: 720,
  tutorName: 'Dr. Evelyn Reed',
  tutorImage: '/card-icon.png',
};

const designCourse: Course = {
  title: 'Game Development',
  learners: 4112,
  tutorials: 60,
  duration: 180,
  tutorName: 'Marcus Chen',
  tutorImage: '/card-icon.png',
};

import { Profile } from "./Recommend";

const profiles: Profile[] = [
  {
    name: "David Men..",
    location: "Accra, Ghana",
    imageUrl: "/david-icon.png",
    rating: "★★★★☆",
    reviews: "4.0 (74 reviews)",
    expertIn: ["React", "Data Science"],
    wantsToLearn: ["Content Creation", "Graphic Design"],
    description: "Frontend developer with 8 years of experience. Passionate about creating beautiful, accessible web experiences. Available for 1-on-1 sessions and group workshops."
  },
  {
    name: "Mary Oluw",
    location: "Lagos, Nigeria",
    imageUrl: "/mary-icon.png",
    rating: "★★★★★",
    reviews: "5.0 (93 reviews)",
    expertIn: ["Content Creation", "Graphics"],
    wantsToLearn: ["UI Design Basics"],
    description: "Professional Content Creation and Graphics Design. Love teaching beginners the fundamentals and helping them find their unique skills."
  },
  {
    name: "Joel Otieno",
    location: "Nairobi, Kenya",
    imageUrl: "/joel-icon.png",
    rating: "★★☆☆☆",
    reviews: "2.0 (24 reviews)",
    expertIn: ["UI Design Basics"],
    wantsToLearn: ["Basics of APIs"],
    description: "Specializing in UI Designing. Beginner-friendly approach with focus on practicing Figma and Adobe Illustration."
  },
];




export default function HomePage() {

  const cards = [
    <CourseCard course={marketingCourse} />,
    <CourseCard course={webDevCourse} />,
    <CourseCard course={dataScienceCourse} />,
    <CourseCard course={designCourse} />,


  ];

  return (
    <>
      <Explore />
      <Categories />
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900">Trending Skills This Week</h2>
          <p className="mt-1 text-sm sm:text-lg text-gray-600">Join thousands learning these hot skills right now</p>
        </div>
        <Carousel items={cards} />
      </section>
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <h2 className="mb-4 text-xl sm:text-3xl font-bold text-gray-900">Recommended for You</h2>
        <Recommend profiles={profiles} />
      </section>
      <Flow />

      <Footer />


    </>
  );
}
