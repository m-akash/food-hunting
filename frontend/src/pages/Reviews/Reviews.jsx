import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const Reviews = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"Whats our clients say"}
        heading={"Reviews"}
      ></SectionTitle>
    </section>
  );
};

export default Reviews;
