import { Star } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  img: string;
}

const CourseCard = ({ title, img }: Props) => {
  return (
    <div className="max-w-md bg-white rounded-3xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container with Badges */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5">
        {/* Placeholder for Main Image */}
        <Image src={img} alt={title} fill className="object-cover" />

        {/* Overlay Badges on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 flex-wrap">
          <span className="bg-white/80 backdrop-blur-md text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            17 Lessons
          </span>
          <span className="bg-white/80 backdrop-blur-md text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            2 hours 16 mins
          </span>
          <span className="bg-white/80 backdrop-blur-md text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            59 Comments
          </span>
        </div>
      </div>

      {/* Card Title & Rating */}
      <div className="flex justify-between items-start mb-2 gap-2">
        <h3 className="text-xl font-bold text-gray-900 truncate">
          From Idea to Startup Succ...
        </h3>
        <div className="flex items-center gap-1 text-gray-700 font-semibold shrink-0">
          <span>4.5</span>
          <Star className="text-gray-300 fill-current" />
        </div>
      </div>

      {/* Author Info */}
      <p className="text-sm text-gray-500 mb-5">
        by <span className="text-blue-600 font-medium">purepearl studio</span>
      </p>

      {/* Level and Students Avatars Row */}
      <div className="flex items-center justify-between mb-6">
        {/* Level Badge */}
        <div className="flex items-center gap-2 bg-gray-100 text-gray-800 px-3.5 py-2 rounded-full text-xs font-medium">
          <Star className="text-gray-600" />
          <span>Beginner</span>
        </div>

        {/* Overlapping Avatars (Placeholders) */}
        <div className="flex items-center -space-x-2 overflow-hidden">
          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-pink-300 relative overflow-hidden">
            <Image
              src="/images/courses/users/user-1.png"
              alt="User 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-yellow-200 relative overflow-hidden">
            <Image
              src="/images/courses/users/user-2.png"
              alt="User 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-400 relative overflow-hidden">
            <Image
              src="/images/courses/users/user-3.png"
              alt="User 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-sky-300 relative overflow-hidden">
            <Image
              src="/images/courses/users/user-4.png"
              alt="User 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-[#ccff00] text-gray-900 text-xs font-bold z-10">
            26+
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex items-baseline gap-1 pt-4 border-t border-gray-100">
        <span className="text-2xl font-extrabold text-blue-600">$25</span>
        <span className="text-xs text-gray-400 font-medium">/lifetime</span>
      </div>
    </div>
  );
};

export default CourseCard;
