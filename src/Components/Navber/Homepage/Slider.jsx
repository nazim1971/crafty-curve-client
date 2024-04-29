import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
    EffectFade
  } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/swiper-bundle.css";

const Slider = () => {
    return (
        <div >
            <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        effect="fade"
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide >
         <img className="h-80 w-full rounded-2xl" src="https://i.ibb.co/3WP6xKd/clay-2.jpg" 
         alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img
            className="h-80 w-full rounded-2xl"
            src="https://i.ibb.co/tLf6k6k/lion.jpg"
            alt="slider-1"
          />
     
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full rounded-2xl"
            src="https://i.ibb.co/FYfjC90/chocolate.jpg"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full rounded-2xl"
            src="https://i.ibb.co/48QTk4j/stone-wood.jpg"
            alt="slider-1"
          />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider; 