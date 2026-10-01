import Container from "@/components/Container";
import LearningCard from "@/components/cards/LearningCard";

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
    <section className="pt-12 sm:pt-14 lg:pt-18 pb-14 sm:pb-18 lg:pb-30">
      <Container>
        {/* Section Header */}
        {/* Heading */}
        <h2 className="text-heading-s text-center mb-3 sm:mb-4 font-semibold text-shuttlegray-950">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        {/* Description */}
        <p className="text-body-l text-shuttlegray-400 text-center max-w-229.25 mx-auto satoshi-regular mb-8 sm:mb-10.5 px-2 sm:px-0">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>

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
