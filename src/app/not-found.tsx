"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-primary-800 grid-shape py-20 sm:py-24 md:py-28 lg:py-32 px-5 md:px-10 lg:px-20">
      <h2 className="text-center text-[160px] leading-[0.9] font-semibold text-transparent sm:text-[220px] md:text-[320px] lg:text-[480px] bg-[linear-gradient(180deg,#D4FB20_0%,rgba(212,251,32,0.96)_25%,rgba(212,251,32,0.81)_50.5%,rgba(212,251,32,0.61)_68%,rgba(255,255,255,0)_100%)] bg-clip-text">
        404
      </h2>

      <div className="mx-auto max-w-233.75 -translate-y-10 space-y-4 text-center sm:-translate-y-14 sm:space-y-5 md:-translate-y-18 md:space-y-8 lg:-translate-y-23.75">
        <h4 className="text-2xl leading-[1.2] font-semibold text-white sm:text-3xl md:text-4xl lg:text-heading-l">
          The page you are looking for doesn&apos;t exist
        </h4>

        <p className="text-base satoshi-regular text-shuttlegray-100 sm:text-lg md:text-body-l">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Button */}
        <Link
          href="/"
          className="hover-animation inline-flex h-12 items-center justify-center rounded-full bg-secondary-400 px-7 font-medium text-gray-950 transition-all duration-200 hover:bg-secondary-500 sm:h-14 sm:px-8"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
