import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const UnsplashSliderItem = ({ picture }) => {
  return <img src={picture.urls.regular} />;
};

const UnsplashSlider = ({ pictures }) => {
  return (
    <section className="movie__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide="3"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {pictures.map((picture) => (
          <SwiperSlide key={picture.id}>
            <UnsplashSliderItem key={picture.id} picture={picture} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default UnsplashSlider;
