import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import img1 from "../../assets/home/01.webp";
import img2 from "../../assets/home/02.webp";
import img3 from "../../assets/home/03.webp";
import img6 from "../../assets/home/06.webp";
import img5 from "../../assets/home/05.webp";
const Banner = () => {
  return (
    <Carousel>
      <div className="md:pt-18 sm: pt-15">
        <img src={img2} className="banner-img" />
      </div>
      <div className="md:pt-18 sm: pt-15">
        <img src={img1} className="banner-img" />
      </div>
      <div className="md:pt-18 sm: pt-15">
        <img src={img3} className="banner-img" />
      </div>
      <div className="md:pt-18 sm: pt-15">
        <img src={img6} className="banner-img" />
      </div>
      <div className="md:pt-18 sm: pt-15">
        <img src={img5} className="banner-img" />
      </div>
    </Carousel>
  );
};

export default Banner;
