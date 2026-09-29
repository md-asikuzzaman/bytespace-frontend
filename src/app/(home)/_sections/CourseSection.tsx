import Container from "@/components/Container";
import CourseCard from "@/components/CourseCard";
import clsx from "clsx";

const CourseSection = () => {
  const courses = [
    {
      title: "Learn Figma from Basic",
      img: "/images/courses/course-1.jpg",
    },
    {
      title: "Build Digital Asset",
      img: "/images/courses/course-2.jpg",
    },
    {
      title: "the Power of Big Data",
      img: "/images/courses/course-3.jpg",
    },
    {
      title: "Balancing Productivity and Self-Care",
      img: "/images/courses/course-4.jpg",
    },
    {
      title: "Mastering Money Management",
      img: "/images/courses/course-5.jpg",
    },
    {
      title: "From Idea to Startup Success",
      img: "/images/courses/course-6.jpg",
    },
  ];

  const tabs = [
    { title: "Featured" },
    { title: "Music" },
    { title: "Drawing & Painting" },
    { title: "Marketing" },
    { title: "Animation" },
    { title: "Social Media" },
    { title: "UI/UX Design" },
    { title: "Creative Marketing" },
    { title: "Digital Illustration" },
    { title: "Film & Video" },
    { title: "Crafts" },
    { title: "Freelance & Entrepreneurship" },
    { title: "Graphic Design" },
    { title: "Photography" },
    { title: "Productivity" },
    { title: "Web Development" },
    { title: "Data Science" },
    { title: "Cooking" },
  ];

  return (
    <section className="mt-12 sm:mt-14 lg:mt-18">
      <Container>
        {/* Heading */}
        <h2 className="text-heading-m text-center max-w-147 mx-auto mb-3 sm:mb-4 font-semibold">
          Discover Your Passion, Build Your Skills
        </h2>

        {/* Description */}
        <p className="text-body-l text-shuttlegray-400 text-center max-w-229.25 mx-auto satoshi-regular mb-8 sm:mb-10.5 px-2 sm:px-0">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10.5 flex-wrap">
          {tabs.map((tab) => (
            <span
              key={tab.title}
              className={clsx(
                "inline-block bg-shuttlegray-50 py-2.5 px-3 sm:py-3 sm:px-4 text-label-m satoshi-medium text-shuttlegray-700 rounded-full cursor-pointer hover:bg-secondary-400 transition-all duration-300",
                tab.title === "Featured" && "bg-secondary-400!",
              )}
            >
              {tab.title}
            </span>
          ))}

          <span className="inline-block py-2.5 px-1 sm:py-3 text-label-m satoshi-medium text-primary-800 rounded-full cursor-pointer">
            + More
          </span>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              img={course.img}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseSection;
