import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonySlider.css";

const TestimonyCardSlider = ({ data }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };
  // Función para generar estrellas doradas
  const generateStars = (starCount) => {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(
        <span key={i} style={{ color: "gold", fontSize: "30px" }}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimony py-5">
      <h1 className="principal-title">Testimonios</h1>
      <div className="testimony-slider container">
        <Slider {...sliderSettings}>
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className="card-top d-flex">
                <div className="image-container">
                  <img src={item.photoUrl} className="card-img-top" alt={item.name} /> 
                </div>
                <div className="profile">
                  <h5 className="card-title">{item.name}</h5>
                  <p>Estudiante</p> 
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">"{item.description}"</p>
                <p className="card-stars">{generateStars(item.stars)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonyCardSlider;
