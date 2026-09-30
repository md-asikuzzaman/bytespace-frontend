"use client";

import Image from "next/image";
import shape1 from "./../../../public/images/hero-shape/shape-1.png";
import shape2 from "./../../../public/images/hero-shape/shape-2.png";
import shape3 from "./../../../public/images/hero-shape/shape-3.png";
import shape4 from "./../../../public/images/hero-shape/shape-4.png";
import shape5 from "./../../../public/images/hero-shape/shape-5.png";
import shape6 from "./../../../public/images/hero-shape/shape-6.png";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
}

const HeroShapeSettings = ({ ref }: Props) => {
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    // Wait until the first browser paint/layout is completed.
    const frame = requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const shape1Y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const shape2Y = useTransform(scrollYProgress, [0, 1], [-100, 120]);
  const shape3Y = useTransform(scrollYProgress, [0, 1], [80, -100]);
  const shape4Y = useTransform(scrollYProgress, [0, 1], [-80, 100]);
  const shape5Y = useTransform(scrollYProgress, [0, 1], [120, -80]);
  const shape6Y = useTransform(scrollYProgress, [0, 1], [-120, 80]);

  const PROGRESS_BAR_WIDTH = 55; // in percentage

  return (
    <>
      {/* Shape 1 */}
      <motion.div
        style={isReady ? { y: shape1Y } : undefined}
        className="pointer-events-none absolute top-[20%] left-0 hidden lg:block"
      >
        <Image src={shape1} alt="Shape 1" priority />
      </motion.div>

      {/* Shape 2 */}
      <motion.div
        style={isReady ? { y: shape2Y } : undefined}
        className="pointer-events-none absolute top-[20%] right-0 hidden lg:block"
      >
        <Image src={shape2} alt="Shape 2" priority />
      </motion.div>

      {/* Shape 3 */}
      <motion.div
        style={isReady ? { y: shape3Y } : undefined}
        className="pointer-events-none absolute top-[50%] left-[12%] hidden md:block"
      >
        <Image src={shape3} alt="Shape 3" priority />
      </motion.div>

      {/* Shape 4 */}
      <motion.div
        style={isReady ? { y: shape4Y } : undefined}
        className="pointer-events-none absolute top-[50%] right-[8%] hidden md:block"
      >
        <Image src={shape4} alt="Shape 4" priority />
      </motion.div>

      {/* Shape 5 */}
      <motion.div
        style={isReady ? { y: shape5Y } : undefined}
        className="pointer-events-none absolute bottom-0 left-[15%] z-10 hidden lg:block"
      >
        <Image src={shape5} alt="Shape 5" priority />
      </motion.div>

      {/* Shape 6 */}
      <motion.div
        style={isReady ? { y: shape6Y } : undefined}
        className="pointer-events-none absolute right-[16%] bottom-0 z-10 hidden lg:block"
      >
        <Image src={shape6} alt="Shape 6" priority />
      </motion.div>

      {/* Achievement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-60 left-1/2 z-10 hidden -translate-x-72.5 flex-col rounded-2xl bg-white p-4 md:inline-flex"
      >
        <h4 className="text-label-m satoshi-medium text-shuttlegray-950">
          UI/UX Design
        </h4>

        <p className="text-body-xs satoshi-regular text-shuttlegray-400">
          200 Courses • 1000+ Students
        </p>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-47.5 left-1/2 z-10 hidden w-full max-w-58 translate-x-23.75 flex-col rounded-2xl bg-white p-4 md:inline-flex"
      >
        <h4 className="text-label-s satoshi-medium mb-2 text-shuttlegray-950">
          Learning Progress
        </h4>

        <h5 className="text-heading-m mb-2 font-semibold text-shuttlegray-950">
          {isInView ? (
            <CountUp end={PROGRESS_BAR_WIDTH} duration={2} delay={0.7} />
          ) : (
            0
          )}
          %
        </h5>

        <div className="h-2 w-full rounded-full bg-shuttlegray-50">
          <motion.div
            className="h-2 rounded-full bg-secondary-400"
            initial={{ width: "0%" }}
            whileInView={{ width: `${PROGRESS_BAR_WIDTH}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.7,
            }}
          />
        </div>
      </motion.div>

      {/* Happy students */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-12.5 left-1/2 z-20 hidden w-full max-w-64.5 -translate-x-90 flex-col rounded-2xl bg-white p-4 md:inline-flex"
      >
        <h4 className="text-label-m satoshi-medium text-shuttlegray-950">
          Happy Students
        </h4>

        <p className="text-body-xs satoshi-regular mb-2 flex items-center gap-1 text-shuttlegray-400">
          <span className="text-shuttlegray-950">4.5</span> (240)
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.10588 0.344297C6.25624 -0.11492 6.90587 -0.114919 7.05623 0.344298L8.27423 4.06417C8.34137 4.26924 8.53249 4.4081 8.74827 4.40859L12.6625 4.41747C13.1457 4.41856 13.3464 5.0364 12.9561 5.32131L9.79471 7.6292C9.62043 7.75642 9.54743 7.9811 9.61364 8.18646L10.8148 11.9118C10.963 12.3717 10.4375 12.7536 10.0459 12.4704L6.87403 10.1769C6.69917 10.0505 6.46294 10.0505 6.28808 10.1769L3.11621 12.4704C2.72464 12.7536 2.19908 12.3717 2.72464 12.7536L2.34736 11.9118L3.54847 8.18646C3.61468 7.9811 3.54168 7.75642 3.3674 7.62919L0.205968 5.3213C-0.18431 5.0364 0.016438 4.41856 0.499644 4.41747L4.41384 4.40859C4.62961 4.4081 4.82074 4.26924 4.88788 4.06417L6.10588 0.344297Z"
              fill="#D4FB20"
            />
          </svg>
        </p>

        <div className="flex items-center -space-x-4 overflow-hidden">
          {[
            "user-1.png",
            "user-2.png",
            "user-3.png",
            "user-4.png",
            "user-1.png",
            "user-2.png",
            "user-3.png",
          ].map((user, index) => (
            <div
              key={`${user}-${index}`}
              className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full sm:h-10.5 sm:w-10.5"
            >
              <Image
                src={`/images/courses/users/${user}`}
                alt={`User ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <div className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary-400 text-label-xs satoshi-medium text-shuttlegray-950 ring-2 ring-white sm:h-10.5 sm:w-10.5">
            26+
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroShapeSettings;
