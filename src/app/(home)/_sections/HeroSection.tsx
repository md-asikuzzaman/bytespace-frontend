import Container from "@/components/Container";
import HeroSearch from "@/components/HeroSearch";

const HeroSection = () => {
  return (
    <section className="bg-primary-800">
      <Container className="min-h-screen pt-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="mb-8 text-4xl font-semibold leading-tight text-surface sm:text-5xl md:text-6xl lg:text-7xl">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-sm font-normal leading-6 text-surface/80 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <HeroSearch />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
