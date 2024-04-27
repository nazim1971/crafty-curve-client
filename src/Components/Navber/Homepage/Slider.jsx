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
          <div 
            className="h-80 w-full bg-cover rounded-2xl"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/XC8LzVD/Screenshot-2024-04-14-172814.png")',
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full rounded-2xl"
            src="https://i.ibb.co/cQFBWS1/nobody-commercial-sky-financial-skyscraper-1.jpg
"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full rounded-2xl"
            src="https://i.ibb.co/NmktGNc/avi-werde-8-N46x-C5-Ym-KM-unsplash-1.jpg
"
            alt="slider-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-80 w-full rounded-2xl"
            src="https://i.ibb.co/WGX0p9Y/bailey-anselme-Bkp3g-Lygye-A-unsplash-1.jpg
"
            alt="slider-1"
          />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider; 