"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { motion } from "motion/react";

type Shape = {
  src: string;
  className: string;
  animation?: {
    x?: number[];
    y?: number[];
    rotate?: number[];
    scale?: number[];
    duration?: number;
    delay?: number;
  };
};

const leftShapes: Shape[] = [
  {
    src: "/images/call_to_action/shape-1.png",
    className: "left-0 top-0 w-60 hidden lg:block",
    animation: {
      y: [0, -12, 0],
      rotate: [0, 2, 0],
      duration: 5,
    },
  },
  {
    src: "/images/call_to_action/shape-2.png",
    className: "left-[10%] top-[10%] w-30 hidden lg:block",
    animation: {
      x: [0, 10, 0],
      duration: 4,
      delay: 0.5,
    },
  },
  {
    src: "/images/call_to_action/shape-3.png",
    className: "left-0 bottom-[10%] w-20",
    animation: {
      rotate: [0, 8, -8, 0],
      duration: 6,
      delay: 0.2,
    },
  },
  {
    src: "/images/call_to_action/shape-4.png",
    className: "left-[4%] bottom-0 w-60",
  },
];

const rightShapes: Shape[] = [
  {
    src: "/images/call_to_action/shape-5.png",
    className: "right-[10%] top-[1%] w-30 hidden lg:block",
    animation: {
      y: [0, 15, 0],
      duration: 4,
      delay: 0.3,
    },
  },
  {
    src: "/images/call_to_action/shape-6.png",
    className: "right-0 top-[5%] w-40 hidden lg:block",
    animation: {
      x: [0, 10, 0],
      duration: 5,
      delay: 0.6,
    },
  },
  {
    src: "/images/call_to_action/shape-7.png",
    className: "right-[1%] bottom-0 w-60",
  },
];

const ShapeGroup = ({ shapes }: { shapes: Shape[] }) => {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block">
      {shapes.map((shape) => {
        const image = (
          <Image
            src={shape.src}
            alt=""
            width={200}
            height={200}
            className="h-auto w-full"
          />
        );

        // No animation = static shape
        if (!shape.animation) {
          return (
            <div key={shape.src} className={`absolute ${shape.className}`}>
              {image}
            </div>
          );
        }

        return (
          <motion.div
            key={shape.src}
            className={`absolute ${shape.className}`}
            animate={{
              x: shape.animation.x,
              y: shape.animation.y,
              rotate: shape.animation.rotate,
              scale: shape.animation.scale,
            }}
            transition={{
              duration: shape.animation.duration ?? 5,
              delay: shape.animation.delay ?? 0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {image}
          </motion.div>
        );
      })}
    </div>
  );
};

const CallToActionSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-14 sm:py-16 lg:py-21">
      {/* Left Shapes */}
      <ShapeGroup shapes={leftShapes} />

      {/* Right Shapes */}
      <ShapeGroup shapes={rightShapes} />

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center gap-7 sm:gap-8 lg:gap-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-heading-s max-w-[610px] px-4 text-center font-semibold text-shuttlegray-50"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="text-body-l max-w-[964px] px-4 text-center text-shuttlegray-50 satoshi-regular sm:px-6 lg:px-0"
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.30,
            ease: "easeOut",
          }}
          className="h-12 rounded-full bg-secondary-400 px-6 text-label-m font-medium text-gray-950 transition-colors duration-200 hover:bg-secondary-500 hover-animation sm:h-14 sm:px-8 cursor-pointer"
        >
          Join as Creator
        </motion.button>
      </Container>
    </section>
  );
};

export default CallToActionSection;
