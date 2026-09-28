import Image from "next/image";

import Container from "@/components/Container";
import HeroSearch from "@/components/HeroSearch";

const HeroSection = () => {
  return (
    <section className="hero-grid relative overflow-hidden bg-primary-800">
      <Container className="relative min-h-screen pt-28 sm:pt-32">
        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-surface sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-sm font-normal leading-6 text-surface/80 sm:mb-12 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <HeroSearch />
        </div>

        {/* Circle Ring */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2 translate-y-[68%] sm:translate-y-[69%]">
          <div className="h-162.5 w-162.5 rounded-full border-150 border-secondary-400 sm:h-275 sm:w-275 sm:border-290" />
        </div>

        {/* Hero Image */}
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={438}
          height={441}
          priority
          className="absolute bottom-0 left-1/2 z-10 h-auto w-70 max-w-none -translate-x-1/2 rounded-lg shadow-lg sm:w-109.5"
        />
      </Container>
    </section>
  );
};

export default HeroSection;
