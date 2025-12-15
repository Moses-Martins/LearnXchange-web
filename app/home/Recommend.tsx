import { MdLocationOn } from "react-icons/md";

export interface Profile {
  name: string;
  location: string;
  imageUrl: string;
  rating: string; // e.g., "★★★★☆"
  reviews: string;
  expertIn: string[];
  wantsToLearn: string[];
  description: string;
}

interface RecommendProps {
  profiles: Profile[];
}

export default function Recommend({ profiles }: RecommendProps) {
  return (
    
      <div className="flex flex-wrap justify-center gap-3 lg:flex-nowrap">
        {profiles.map((profile, idx) => (
          <div key={idx} className="w-full max-w-[400px] lg:w-1/3 flex-shrink-0">
            <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-xl h-[270px] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                    src={profile.imageUrl}
                    alt="Profile"
                  />
                  <div>
                    <p className="text-lg font-semibold">{profile.name}</p>
                    <p className="flex items-center text-sm text-zinc-400"><MdLocationOn /><span>{profile.location}</span></p>
                  </div>
                </div>
                <div className="text-right flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="text-yellow-500 mr-1">{profile.rating}</span>
                    <span className="text-zinc-400 text-xs">{profile.reviews}</span>
                  </div>
                  <button className="ml-auto mt-1 px-2 py-2 text-sm font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-150">
                    View Profile
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-zinc-600 mb-1">Expert in</p>
                <div className="flex flex-wrap gap-2">
                  {profile.expertIn.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs text-white font-medium bg-purple-600 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-zinc-600 mb-1">Wants to learn</p>
                <div className="flex flex-wrap gap-2">
                  {profile.wantsToLearn.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs text-white font-medium bg-purple-600 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-zinc-400">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    
  );
}


