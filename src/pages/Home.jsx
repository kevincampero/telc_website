import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Callout from "../components/Callout";
import Statement from "../components/Statement"
import TestimonySlider from "../components/TestimonySlider"
//icons
import { FaQrcode } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

{/*Carousel de testimonios */}
const testimonyData = [
  {
    name: "Patricia Isabel Vargas",
    photoUrl: "/assets/testimony/woman2.jpg",
    description: "He tenido la oportunidad de tomar varios cursos y estoy continuamente impresionado por la calidad de la enseñanza. Los instructores son expertos en sus campos. Los ejemplos prácticos y las actividades interactivas hacen que el aprendizaje sea efectivo. Mi inversión en estos cursos ha dado sus frutos y ha abierto nuevas puertas en mi vida profesional.",
    stars: 4,
  },{
    name: "Juan Carlos Morales",
    photoUrl: "/assets/testimony/man1.jpg",
    description: "Estos cursos me han ayudado a descubrir mi pasión por un nuevo campo. Los materiales de enseñanza son de alta calidad y los instructores están dispuestos a brindar orientación adicional cuando la necesitas. Gracias a estos cursos, he realizado una transición exitosa a una nueva carrera que me apasiona.",
    stars: 4,
  },
  {
    name: "Ana María Rodríguez",
    photoUrl: "/assets/testimony/woman1.jpg",
    description: "La flexibilidad de estos cursos ha sido un salvavidas. Como madre trabajadora, puedo aprender a mi propio ritmo sin sacrificar tiempo de calidad con mi familia. Los instructores son comprensivos y accesibles. A través de estos cursos, he adquirido habilidades que me han permitido avanzar en mi carrera de manera efectiva",
    stars: 5,
  },
  {
    name: "Luis Eduardo Soto",
    photoUrl: "/assets/testimony/man2.jpg",
    description: "La variedad de cursos disponibles aquí es impresionante. He tenido la oportunidad de aprender sobre una amplia gama de temas, desde desarrollo web hasta cocina internacional. La enseñanza es de primera categoría, y la plataforma es fácil de navegar. Siempre estoy emocionado de inscribirme en un nuevo curso y seguir explorando mis intereses.",
    stars: 5,
  }
];


const Home = () => {
  return (
    <>
      <Banner />
      <div className="cards d-flex justify-content-center flex-wrap">
        <Card
          icon={<FaQrcode />}
          title="Verificación de Certificados"
          description="Verifica la autenticidad de tus certificados con facilidad."
        />
        <Card
          icon={<FaCertificate />}
          title="Certificaciones Reconocidas"
          description="Certificaciones reconocidas con verdadero valor curricular."
        />
        <Card
          icon={<FaBookOpen />}
          title="Cursos en Diversas Áreas"
          description="Explora una amplia variedad de cursos tanto en línea como presencial."
        />
        <Card
          icon={<FaChalkboardTeacher />}
          title="Instructores Calificados"
          description="Aprende de profesionales expertos en sus campos respectivos."
        />
      </div>
      <Callout
        image="/assets/callout/flag.jpg"
        smallTitle="Estamos en toda Bolivia"
        title="Cursos de Calidad Presencial y en Línea"
        description="El instituto TELC te ayuda a progresar en tu carrera y cumplir tus metas. Ya sea que prefieras aprender de forma presencial en Cochabamba o en línea desde cualquier ciudad de Bolivia, tenemos la flexibilidad que necesitas.

        Nuestra entidad, con alcance a nivel nacional, se enorgullece de enviar certificados de valor curricular a cualquier parte de Bolivia. Garantizamos la calidad de nuestra formación y te ayudamos a alcanzar tus metas educativas.

        ¿Listo para comenzar tu viaje educativo? ¡No esperes más! Descubre todo lo que tenemos para ofrecerte y toma el control de tu futuro."
        buttonText="¿Cómo hacemos los envíos?"
        buttonUrl="/blog"
        reverse={false}
      />
      <Callout
        image="/assets/callout/students.jpg"
        smallTitle="Nuestra Oferta Educativa"
        title="Cursos de Calidad para tu Éxito"
        description="En nuestro instituto, nos enorgullece ofrecer una amplia gama de cursos diseñados para impulsar tu carrera y ampliar tus conocimientos. Nuestra misión es brindarte una experiencia educativa excepcional.      
        Ya sea que estés buscando avanzar en tu carrera, adquirir nuevas habilidades o simplemente aprender algo nuevo, estamos aquí para ayudarte a alcanzar tus metas. Explora nuestra oferta educativa y únete a nosotros en el camino hacia el éxito.
        ¿Estás listo para comenzar tu viaje educativo? ¡No esperes más! Descubre todo lo que tenemos para ofrecerte y toma el control de tu futuro."
        buttonText="Explora Nuestros Cursos"
        buttonUrl="/cursos"
        reverse={true}
      />
      <Statement
        title="Contamos con"
        description="Resoluciones Ministeriales" 
        enlace="/blog"
      />
      <TestimonySlider data={testimonyData} />
    </>

  );
}

export default Home;