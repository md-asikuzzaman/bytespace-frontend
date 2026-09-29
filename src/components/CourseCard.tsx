import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  img: string;
}

const CourseCard = ({ title, img }: Props) => {
  return (
    <div className="w-full bg-white rounded-3xl border border-shuttlegray-200 p-3 sm:p-4 hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative w-full h-52 sm:h-60 lg:h-64 rounded-2xl overflow-hidden mb-4 sm:mb-5">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="bg-white/70 backdrop-blur-sm text-gray-800 text-label-xs px-2.5 sm:px-3 py-1.5 rounded-full shadow-sm satoshi-medium">
            17 Lessons
          </span>

          <span className="bg-white/70 backdrop-blur-sm text-gray-800 text-label-xs px-2.5 sm:px-3 py-1.5 rounded-full shadow-sm satoshi-medium">
            2 hours 16 mins
          </span>

          <span className="bg-white/70 backdrop-blur-sm text-gray-800 text-label-xs px-2.5 sm:px-3 py-1.5 rounded-full shadow-sm satoshi-medium">
            59 Comments
          </span>
        </div>
      </div>

      {/* Title & Rating */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="min-w-0 text-lg sm:text-xl font-semibold text-shuttlegray-950 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-shuttlegray-700 shrink-0 satoshi-regular">
          <span className="text-body-l">4.5</span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3096 5.5525L8.8396 0.7125C8.5496 -0.2375 7.2096 -0.2375 6.9296 0.7125L5.4496 5.5525H0.999597C0.0295973 5.5525 -0.370403 6.8025 0.419597 7.3625L4.0596 9.9625L2.6296 14.5725C2.3396 15.5025 3.4196 16.2525 4.1896 15.6625L7.8796 12.8625L11.5696 15.6725C12.3396 16.2625 13.4196 15.5125 13.1296 14.5825L11.6996 9.9725L15.3396 7.3725C16.1296 6.8025 15.7296 5.5625 14.7596 5.5625H10.3096V5.5525Z"
              fill="#CED0D3"
            />
          </svg>
        </div>
      </div>

      {/* Author */}
      <p className="text-body-s text-gray-500 mb-4 sm:mb-5">
        by{" "}
        <Link href="#" className="text-primary-800">
          purepearl studio
        </Link>
      </p>

      {/* Level & Students */}
      <div className="flex items-center justify-between gap-3 mb-4">
        {/* Level */}
        <div className="flex items-center gap-2 bg-shuttlegray-50 text-shuttlegray-700 px-3 py-2 rounded-full text-label-xs satoshi-medium shrink-0">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z"
              fill="#4B4C53"
            />
          </svg>

          <span>Beginner</span>
        </div>

        {/* Avatars */}
        <div className="flex items-center -space-x-2 overflow-hidden">
          {["user-1.png", "user-2.png", "user-3.png", "user-4.png"].map(
            (user, index) => (
              <div
                key={user}
                className="relative h-7 w-7 sm:h-8 sm:w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
              >
                <Image
                  src={`/images/courses/users/${user}`}
                  alt={`User ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ),
          )}

          <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full ring-2 ring-white bg-secondary-400 text-shuttlegray-950 text-label-xs z-10 satoshi-medium">
            26+
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-heading-xs font-semibold text-primary-800">
          $25
        </span>

        <span className="text-body-xs text-shuttlegray-700 satoshi-regular">
          /lifetime
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
