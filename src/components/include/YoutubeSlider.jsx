import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const YoutubeSliderItem = ({ video }) => {
  return <img src={video.snippet.thumbnails.high.url} />;
};

const YoutubeSlider = ({ videos }) => {
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
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <YoutubeSliderItem key={video.id} video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default YoutubeSlider;
