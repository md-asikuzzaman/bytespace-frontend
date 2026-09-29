import HeroSection from "./_sections/HeroSection";
import LearningPathSection from "./_sections/LearningPathSection";
import LogoTickerSection from "./_sections/LogoTickerSection";
import CourseSection from "./_sections/CourseSection";
import CallToActionSection from "./_sections/CallToActionSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LogoTickerSection />
      <CourseSection />
      <LearningPathSection />
      <CallToActionSection />
    </>
  );
};

export default Home;
