import Container from "@/components/Container";
import LearningCard from "@/components/LearningCard";

const learningPaths = [
  {
    img: "/images/icons/icon-1.png",
    title: "Design",
  },
  {
    img: "/images/icons/icon-2.png",
    title: "Development",
  },
  {
    img: "/images/icons/icon-3.png",
    title: "IT & Software",
  },
  {
    img: "/images/icons/icon-4.png",
    title: "Business",
  },
  {
    img: "/images/icons/icon-5.png",
    title: "Maketing",
  },
  {
    img: "/images/icons/icon-6.png",
    title: "Photography",
  },
];

const LearningPathSection = () => {
  return (
    <section className="bg-surface py-16 sm:py-20 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Explore Diverse Learning Paths at ByteSpace
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">
            At ByteSpace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Learning Paths */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {learningPaths.map((path) => (
            <LearningCard key={path.title} img={path.img} title={path.title} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LearningPathSection;
