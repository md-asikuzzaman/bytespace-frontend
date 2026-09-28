"use client";

import Image from "next/image";
import { motion } from "motion/react";

const logos = [
  { src: "/images/logos/logo-1.png", alt: "Logo 1" },
  { src: "/images/logos/logo-2.png", alt: "Logo 2" },
  { src: "/images/logos/logo-3.png", alt: "Logo 3" },
  { src: "/images/logos/logo-4.png", alt: "Logo 4" },
  { src: "/images/logos/logo-5.png", alt: "Logo 5" },
  { src: "/images/logos/logo-1.png", alt: "Logo 1" },
  { src: "/images/logos/logo-2.png", alt: "Logo 2" },
  { src: "/images/logos/logo-3.png", alt: "Logo 3" },
  { src: "/images/logos/logo-4.png", alt: "Logo 4" },
  { src: "/images/logos/logo-5.png", alt: "Logo 5" },
  { src: "/images/logos/logo-1.png", alt: "Logo 1" },
  { src: "/images/logos/logo-2.png", alt: "Logo 2" },
  { src: "/images/logos/logo-3.png", alt: "Logo 3" },
  { src: "/images/logos/logo-4.png", alt: "Logo 4" },
  { src: "/images/logos/logo-5.png", alt: "Logo 5" },
];

const LogoTicker = () => {
  return (
    <section className="overflow-hidden bg-surface py-8 sm:py-12 md:py-20">
      <div className="relative mx-auto w-full">
        <motion.div
          className="flex w-max items-center gap-8 sm:gap-12 md:gap-18"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex h-10 w-24 shrink-0 items-center justify-center sm:h-12 sm:w-28 md:h-12 md:w-32"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={168}
                height={41}
                className="h-auto max-h-7 w-auto max-w-full object-contain sm:max-h-8 md:max-h-10"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;
