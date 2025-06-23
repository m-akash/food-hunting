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
      <div className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center">
     
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 animate-fade-in z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-8">
          <div className="backdrop-blur-md bg-black/40 p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10 max-w-2xl mx-auto animate-slide-up">
            <h1 className="mb-4 md:mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest text-white drop-shadow-2xl font-serif transition-colors duration-300">
              {title}
            </h1>
            <p className="mb-5 text-lg md:text-xl lg:text-2xl text-gray-200 max-w-xl mx-auto drop-shadow-lg font-light animate-fade-in delay-200">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SharedBgImg;
