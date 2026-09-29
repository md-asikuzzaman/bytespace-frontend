import Container from "@/components/Container";
import CourseCard from "@/components/CourseCard";

const CourseSection = () => {
  const courses = [
    {
      title: "From Idea to Startup Success",
      img: "/images/courses/course-1.jpg",
    },
    {
      title: "Mastering Web Development",
      img: "/images/courses/course-2.jpg",
    },
    {
      title: "Digital Marketing Essentials",
      img: "/images/courses/course-3.jpg",
    },
  ];

  return (
    <section className="mt-18">
      <Container>
        <h2 className="text-heading-m font-semibold text-center max-w-147 mx-auto">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="text-body-m text-shuttlegray-400 text-center max-w-229.25 mx-auto">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <div className=""></div>

        {/* passion card wrapper */}
        <div className="">
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
