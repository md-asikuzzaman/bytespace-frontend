import HeroSection from "./_sections/HeroSection";
import LearningPathSection from "./_sections/LearningPathSection";
import LogoTickerSection from "./_sections/LogoTickerSection";
import CourseSection from "./_sections/CourseSection";
import CallToActionSection from "./_sections/CallToActionSection";
import TestimonialSection from "./_sections/TestimonialSection";
import FeaturedSection from "./_sections/FeaturedSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LogoTickerSection />
      <CourseSection />
      <LearningPathSection />
      <FeaturedSection />
      <CallToActionSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
