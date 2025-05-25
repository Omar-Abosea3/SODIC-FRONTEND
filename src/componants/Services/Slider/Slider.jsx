import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Add your styles here (see below)
import "./Slider.css";
function FocusOnSelect({ images }) {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper py-10 px-4 max-w-6xl mx-auto">
      <Slider {...settings}>
        {[...images , ...images].map((img, idx) => (
          <div key={idx} className="image-slide">
            <img src={img} alt={`unit-${idx}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FocusOnSelect;
