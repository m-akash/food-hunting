import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/review/")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subHeading={"What our clients say"}
          heading={"Testimonials"}
        ></SectionTitle>

        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review.rating}
                      readOnly
                    />
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                    "{review.details}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-400 ml-4">
                      {review.name}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
