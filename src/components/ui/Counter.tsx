"use client";

import { useRef } from "react";
import CounterUp from "react-countup";

import { useInView } from "motion/react";

const Counter = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  return (
    <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-14 lg:flex-nowrap">
      <div>
        <h4 className="text-heading-s font-medium text-primary-800" ref={ref}>
          {isInView ? <CounterUp start={0} end={12} duration={5} /> : 0}K
        </h4>
        <p className="text-body-l text-shuttlegray-700 satoshi-regular">
          Students
        </p>
      </div>
      <div>
        <h4 className="text-heading-s font-medium text-primary-800" ref={ref}>
          {isInView ? <CounterUp start={0} end={70} duration={5} /> : 0}+
        </h4>
        <p className="text-body-l text-shuttlegray-700 satoshi-regular">
          Courses
        </p>
      </div>
      <div>
        <h4 className="text-heading-s font-medium text-primary-800" ref={ref}>
          {isInView ? <CounterUp start={0} end={16} duration={5} /> : 0}
        </h4>
        <p className="text-body-l text-shuttlegray-700 satoshi-regular">
          Creators
        </p>
      </div>
    </div>
  );
};

export default Counter;
