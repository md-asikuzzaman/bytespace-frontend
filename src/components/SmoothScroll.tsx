"use client";

import { ReactLenis } from "lenis/react";

interface Props {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: Props) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
