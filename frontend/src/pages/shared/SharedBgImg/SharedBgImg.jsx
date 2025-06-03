import { Parallax } from "react-parallax";

const SharedBgImg = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="background image"
      strength={-200}
      className="w-full"
    >
      <div className="hero min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] relative backdrop-blur-[1px]">
        <div className="hero-overlay bg-black/40"></div>
        <div className="hero-content text-neutral-content text-center px-4 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto backdrop-blur-md bg-black/30 p-8 rounded-lg shadow-2xl">
            <h1 className="mb-4 md:mb-6 text-4xl md:text-5xl lg:text-5xl font-bold uppercase tracking-wider text-white drop-shadow-lg">
              {title}
            </h1>
            <p className="mb-5 text-base md:text-lg lg:text-xl text-gray-200 max-w-xl mx-auto drop-shadow-md">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SharedBgImg;
