import React from "react";

interface SectionTitleProps {
  heading: string;
  subHeading: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ heading, subHeading }) => {
  return (
    <div className="flex w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto flex-col mb-12">
      <div className="flex flex-col items-center">
        <span className="px-4 py-1 mb-2 bg-amber-100/20 rounded-full text-amber-300 text-sm md:text-base font-semibold tracking-wide shadow-sm">
          {subHeading}
        </span>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 rounded-full mb-4 mt-2"></div>
        <h3 className="text-center text-white text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold tracking-tight drop-shadow-lg mb-2">
          {heading}
        </h3>
        <div className="w-10 h-1 bg-amber-400 rounded-full mt-2"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
