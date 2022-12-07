import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const MovieSliderItem = ({ movie }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title}
    />
  );
};

const MovieSlider = ({ movies }) => {
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
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieSliderItem key={index} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default MovieSlider;
