import React from "react";

const Counter = () => {
  return (
    <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-14 lg:flex-nowrap">
      <div>
        <h4 className="text-heading-s font-medium text-primary-800">12K</h4>
        <p className="text-body-l text-shuttlegray-700 satoshi-regular">
          Students
        </p>
      </div>
      <div>
        <h4 className="text-heading-s font-medium text-primary-800">70+</h4>
        <p className="text-body-l text-shuttlegray-700 satoshi-regular">
          Courses
        </p>
      </div>
      <div>
        <h4 className="text-heading-s font-medium text-primary-800">16</h4>
        <p className="text-body-l text-shuttlegray-700 satoshi-regular">
          Creators
        </p>
      </div>
    </div>
  );
};

export default Counter;
