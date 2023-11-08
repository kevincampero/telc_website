import React from "react";
import SliderCourses from "../components/SliderCourses";
const Courses = () => {
  const allCourses = [
    {
      courseName: "Normas de bioseguridad",
      imageSrc: "/assets/courses/salud1.jpg",
      categories: ["Sector salud"],
      price: "150"
    },
    {
      courseName: "Código de seguridad social",
      imageSrc: "/assets/courses/salud2.jpg",
      categories: ["Sector salud"],
      price: "200"
    },
    {
      courseName: "Ley SALMI",
      imageSrc: "/assets/courses/salud3.jpg",
      categories: ["Sector salud"],
      price: "200"
    },
    {
      courseName: "Ley N°1152 - SUS",
      imageSrc: "/assets/courses/salud4.jpg",
      categories: ["Sector salud"],
      price: "100"
    },
    {
      courseName: "SAFCI - SOAPS - SIAL",
      imageSrc: "/assets/courses/salud5.jpg",
      categories: ["Sector salud"],
      price: "100"
    },
    {
      courseName: "Inglés",
      imageSrc: "/assets/courses/idiomas1.jpg",
      categories: ["Idiomas"],
      price: "150"
    },
    {
      courseName: "Quechua",
      imageSrc: "/assets/courses/idiomas2.jpg",
      categories: ["Idiomas"],
      price: "200"
    },
    {
      courseName: "Aymara",
      imageSrc: "/assets/courses/idiomas3.jpg",
      categories: ["Idiomas"],
      price: "200"
    },
    {
      courseName: "Portugues",
      imageSrc: "/assets/courses/idiomas4.png",
      categories: ["Idiomas"],
      price: "100"
    },
    
  ];
  return (
    <div className="my-5">
      <h1 className="principal-title">Nuestros Cursos</h1>
      <SliderCourses courses={allCourses} category="Sector salud" />
      <SliderCourses courses={allCourses} category="Idiomas" />
      <SliderCourses courses={allCourses} category="Sector salud" />
      <SliderCourses courses={allCourses} category="Idiomas" />
      <SliderCourses courses={allCourses} category="Sector salud" />
    </div>
  ); 
}

export default Courses;