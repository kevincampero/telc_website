import React from "react";
import Slider from "react-slick";

import "./sliderCourses.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCourses = ({ courses, category }) => {
  // Filtra los cursos según la categoría
  const filteredCourses = courses.filter((course) =>
    course.categories.includes(category)
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
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

  return (
    <>
      <div className="slider-courses container py-2">
        <h2 className="secondary-category">{category}</h2>
        <div id="course-slider" className="carousel slide" data-bs-ride="carousel">
          <Slider {...sliderSettings}>
            {filteredCourses.map((course, index) => (
              <div key={index} className="card">
                <img
                  src={course.imageSrc}
                  className="card-img-top"
                  alt={course.courseName}
                />
                <div className="card-body">
                  <p className="card-text">Curso completo de {course.courseName}</p>
                  <span className="text-price">{course.price} Bs</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderCourses;
