import Container from "@/components/Container";
import Counter from "@/components/ui/Counter";
import Image from "next/image";

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
      fill="#003BE2"
    />
  </svg>
);

const FeaturedSection = () => {
  return (
    <section className="bg-[#fafafa] py-14 sm:py-18 md:py-24 lg:py-30">
      <Container>
        <div>
          {/* First Feature */}
          <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-15">
            {/* Content */}
            <div className="w-full lg:flex-1">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <h2 className="text-heading-m max-w-xl font-semibold text-shuttlegray-950">
                  Your Path to Professional Growth Starts Here!
                </h2>

                <p className="max-w-2xl text-body-l text-shuttlegray-700 satoshi-regular">
                  Explore our curated selection of courses tailored to enhance
                  your capabilities and accelerate your career journey. Whether
                  you are looking to sharpen specific skills, gain industry
                  expertise, or embark on a new career path entirely, we have
                  the resources you need.
                </p>

                {/* Counter */}
                <Counter />
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:flex-1">
              <div className="mx-auto w-full max-w-[577px]">
                <Image
                  src="/images/featured/featured-1.png"
                  alt="Professional growth"
                  width={577}
                  height={540}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Feature */}
          <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-center lg:gap-15">
            {/* Image */}
            <div className="w-full lg:order-1 lg:flex-1">
              <div className="mx-auto w-full max-w-[577px]">
                <Image
                  src="/images/featured/featured-2.png"
                  alt="Create and manage courses"
                  width={577}
                  height={540}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:order-2 lg:flex-1">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <h2 className="text-heading-m max-w-xl font-semibold text-shuttlegray-950">
                  Create & Manage Courses Easily.
                </h2>

                <p className="max-w-2xl text-body-l text-shuttlegray-700 satoshi-regular">
                  ByteSpace supports individuals or entities in the creation,
                  publication, and administration of educational courses.
                </p>

                {/* Features */}
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-body-m text-shuttlegray-950"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;
