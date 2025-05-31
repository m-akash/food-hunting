import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Categoty = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <SectionTitle
        subHeading="From 11:00AM to 10:00PM"
        heading="order online"
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <div className="relative group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={img1}
                alt="Salad"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="absolute bottom-4 left-0 right-0 text-center text-3xl text-white font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              Salad
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={img2}
                alt="Pizza"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="absolute bottom-4 left-0 right-0 text-center text-3xl text-white font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              Pizza
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={img3}
                alt="Desserts"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="absolute bottom-4 left-0 right-0 text-center text-3xl text-white font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              Desserts
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={img4}
                alt="Cake"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="absolute bottom-4 left-0 right-0 text-center text-3xl text-white font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              Cake
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={img5}
                alt="Soup"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="absolute bottom-4 left-0 right-0 text-center text-3xl text-white font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              Soup
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categoty;
