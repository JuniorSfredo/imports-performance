import React from "react";
import "./Carousel.css";
import redAudi from "../../assets/audi-carousel.png";
import blackBmw from "../../assets/bmw-carousel.png";
import whiteBmw from "../../assets/bmw-branca.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  const _imagesCarousel = [redAudi, blackBmw, whiteBmw];

  return (
    <section className="carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="swiper-carousel"
      >
        { _imagesCarousel.map((image, index) => (
          <SwiperSlide key={index}>
            {index === 0 && (
              <div className="audi-slider">
                <p className="audi-slider-title">
                  O ajuste <span>PERFEITO</span>
                </p>
                <p className="audi-slider-subtitle lh-05">Para cada detalhe</p>
                <button className="btn-audi-slider">Junte-se ao time</button>
              </div>
            )}
            {index === 1 && (
              <div className="audi-slider">
                <p className="audi-slider-title">
                  <span>DESPERTE</span>
                </p>
                <p className="audi-slider-subtitle lh-02">
                  o verdadeiro potencial
                </p>
                <button className="btn-audi-slider">Descubra agora</button>
              </div>
            )}
            {index === 2 && (
              <div className="audi-slider">
                <p className="audi-slider-subtitle">
                  Cada curva, cada aceleração
                </p>
                <p className="audi-slider-title lh-07">
                  uma nova <span>SENSAÇÃO</span>
                </p>
                <button className="btn-audi-slider">Iniciar Jornada</button>
              </div>
            )}
            <div className="overlay-images"></div>
            <img src={image} alt={`Cars Carousel`} className="image-carousel" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
