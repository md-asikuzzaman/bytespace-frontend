"use client";

import Container from "@/components/Container";
import CheckIcon from "@/components/icons/CheckIcon";
import Counter from "@/components/ui/Counter";
import Image from "next/image";

import { motion } from "motion/react";

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

import shape1 from "./../../../../public/images/featured/shape-1.png";
import shape2 from "./../../../../public/images/featured/shape-2.png";
import shape3 from "./../../../../public/images/featured/shape-3.png";

const FeaturedSection = () => {
  return (
    <section className="bg-[#fafafa] py-14 sm:py-18 md:py-24 lg:py-30 relative overflow-hidden">
      {/* Shape settings */}
      <Image
        src={shape1}
        alt="Shape 1"
        className="absolute top-0 left-[10%] pointer-events-none"
      />
      <Image
        src={shape2}
        alt="Shape 2"
        className="absolute bottom-0 left-0 pointer-events-none hidden lg:block"
      />
      <Image
        src={shape3}
        alt="Shape 3"
        className="absolute bottom-0 right-0 pointer-events-none"
      />

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
              <div className="mx-auto w-full max-w-144.2">
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
              <div className="mx-auto w-full max-w-144.2">
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
                <motion.ul
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                >
                  {features.map((feature) => (
                    <motion.li
                      key={feature}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 30,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.5,
                            ease: "easeOut",
                          },
                        },
                      }}
                      className="flex items-center gap-2 text-body-m text-shuttlegray-950"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;
