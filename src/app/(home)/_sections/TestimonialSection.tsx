import Container from "@/components/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/images/testimonials/person-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/images/testimonials/person-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/images/testimonials/person-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="pt-12 sm:pt-14 lg:pt-18 relative pb-12 md:pb-14">
      {/* Shape settings */}
      <Image
        src="/images/testimonials/shape-1.png"
        alt="Shape"
        width={200}
        height={200}
        objectFit="cover"
        className="h-full w-auto absolute top-0 left-0 pointer-events-none"
      />
      <Image
        src="/images/testimonials/shape-2.png"
        alt="Shape"
        width={200}
        height={200}
        objectFit="cover"
        className="absolute top-0 left-1/2 h-full w-auto -translate-x-1/2 pointer-events-none"
      />
      <Image
        src="/images/testimonials/shape-3.png"
        alt="Shape"
        width={200}
        height={200}
        objectFit="cover"
        className="h-full w-auto absolute top-0 right-0 pointer-events-none"
      />
      <Container>
        {/* Heading & Description */}
        <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:gap-8">
          {/* Heading */}
          <div className="w-full lg:flex-1">
            <h2 className="text-heading-m max-w-xl font-semibold text-shuttlegray-950">
              Discover What Our Community Is Saying
            </h2>
          </div>

          {/* Description */}
          <p className="w-full max-w-229.25 text-body-l text-shuttlegray-500 satoshi-regular lg:flex-1 z-10">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-10 lg:mt-18 lg:grid-cols-3 items-baseline">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              img={testimonial.image}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
