import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto flex-col mb-8 md:mb-12">
      <p className="text-center text-amber-600 text-base md:text-lg lg:text-xl font-medium">
        ---{subHeading}---
      </p>
      <div className="divider"></div>
      <h3 className="text-center text-3xl md:text-4xl lg:text-4xl uppercase font-bold">
        {heading}
      </h3>
      <div className="divider"></div>
    </div>
  );
};

export default SectionTitle;
