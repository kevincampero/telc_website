import React from "react";
import Paragraph from "../components/Paragraph";

const About = () => {
  return (
    <>
      <br/>
      <Paragraph
        title="Historia" 
        subtitle="Instituto “TELC” The Executive Learning Center"
        text={`INSTITUTO “TELC” THE EXECUTIVE LEARNING CENTER La empresa es un instituto de educación superior, establecido en el departamento de Cochabamba; el cual efectuará operaciones en el rubro de formación profesional.En la determinación del nombre del instituto se ve por conveniente relacionarlo de manera cercana con el sector empresarial, esto por dos motivos; uno es el aspecto técnico, porque la institución brindará carreras a nivel técnico medio superior formando profesionales técnicos, el otro motivo es un aspecto de identidad.
        La empresa pertenece al rubro de educación superior privada, el servicio que ofrecerá la institución es de formar profesionales a nivel técnico medio-superior, esto se realiza con el objeto de mejorar el sistema económico por lo que se propone carreras técnicas para poder adaptarse al mercado laboral y así emprender su propio negocio.
        Lic. Mario E. Ramos Ticona de nacionalidad boliviana, funda la institución TELC el 11 de octubre del 2005 en la ciudad de Cochabamba, la misma que ofrecía en primera instancia cursos de computación, cajeros, oficiales de crédito y contabilidad. Al pasar los años fueron aumentando talleres dirigidos al área de salud, económico y público.
        Así mismo también se implementó el curso de Quechua bajo el respaldo del Instituto Plurinacional de Estudios de Lenguas y Culturas. Todos de acuerdo al requerimiento de los clientes.
        Actualmente la institución se encuentra en pleno centro de la ciudad ubicado en la Av. San Martin N°644 entre Ladislao Cabrera y Uruguay, Edificio Shoping Center.`}
      />
      <br/>
      <Paragraph
        title="Valores" 
        subtitle="Misión"
        text={`Formar profesionales competentes a nivel técnico, con enfoque humanista, con afán de servicio, ética profesional y sólidos conocimientos técnicos, a través de una oferta educativa de calidad encaminada a emprender y desarrollar proyectos innovadores en beneficio de la población.`}
      />
      <Paragraph
        subtitle="Visión"
        text={`Ser el más grande y el mejor instituto de formación profesional, donde se formen emprendedores y empresarios que harán crecer el país, así también mejorar la calidad de vida de los estudiantes, de modo que al culminar la carrera puedan empezar su propio negocio.`}
      />
      <br/>
      <Paragraph
        title="Resoluciones del Estado Plurinacional" 
        subtitle="Resolución del Instituto Plurinacional de Estudios de Lenguas y Culturas"
        text={`• Resolución Administrativa 057/2018`}
      />
      <Paragraph 
        text={`• Resolución Administrativa 033/2020`}
      />
      <br />
      <Paragraph 
        subtitle="Resolución del Ministerio de Educación:"
        text={`• Resolución Ministerial 234/2005`}
      />
      <Paragraph 
        text={`• Resolución Ministerial 793/2011`}
      />
      <br />
      <Paragraph 
        title="Reconocimientos del Estado Plurinacional"
        text={`• Reconocimiento por la Cámara de Senadores Septiembre del 2015`}
      />
      <Paragraph 
        text={`• Reconocimiento por el Instituto Plurinacional de Estudios de Lenguas y Culturas “IPELC Septiembre del 2020”`}
      />
      <Paragraph 
        text={`• Reconocimiento por la Cámara de Diputados Octubre del 2021`}
      />
      <br />
      
    </>
  );
}

export default About;