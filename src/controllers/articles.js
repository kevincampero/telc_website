const articles = [
    {
        id: 1,
        image: "../src/assets/notices/notice1.jpg",
        title: "La importancia del curriculum en Bolivia: ¿Cómo mejorar mi curriculum vitae en Bolivia?",
        description: "Descubre cómo mejorar tu currículum vitae en Bolivia para destacar en el mercado laboral. Nuestros cursos en el Instituto de Capacitación Técnica TELC ofrecen certificados de alto valor curricular en diversas especialidades. Prepara tu camino hacia el éxito profesional.",
        date: "28 de octubre 2023",
    }, {
        id: 2,
        image: "../src/assets/notices/notice2.jpg",
        title: "Transformando la Educación en Bolivia: El Impacto Positivo de la Educación en Línea",
        description: "Descubre cómo la educación en línea está revolucionando la forma en que los bolivianos acceden a oportunidades educativas de calidad. Exploraremos cómo el Instituto de Capacitación Técnica TELC está liderando esta transformación y brindando una educación flexible y asequible.",
        date: "25 de octubre 2023",
    }, {
        id: 3,
        image: "../src/assets/notices/notice3.jpg",
        title: "Dominando las Entrevistas de Trabajo: Tu Llave hacia el Éxito Profesional",
        description: "Aprende a destacar en entrevistas de trabajo en Bolivia. Obtén consejos valiosos y descubre cómo el Instituto de Capacitación Técnica TELC te prepara para impresionar a los empleadores y avanzar en tu carrera.",
        date: "10 de septiembre 2023",
    }, {
        id: 4,
        image: "../src/assets/notices/notice4.jpg",
        title: "Equilibrio Entre el Trabajo y la Vida Personal: Clave para una Vida Saludable",
        description: "Descubre estrategias para mantener un equilibrio saludable entre el trabajo y la vida personal. Encuentra consejos prácticos y aprende cómo el Instituto de Capacitación Técnica TELC promueve la armonía laboral en Bolivia.",
        date: "28 de octubre 2023",
    }, {
        id: 5,
        image: "../src/assets/notices/notice5.jpg",
        title: "Aumenta tu Productividad en el Trabajo: Consejos para un Día Productivo",
        description: "Descubre estrategias efectivas para aumentar tu productividad en el trabajo. Obtén consejos prácticos y encuentra cómo el Instituto de Capacitación Técnica TELC puede impulsar tu desempeño laboral en Bolivia.",
        date: "25 de octubre 2023",
    }, {
        id: 6,
        image: "../src/assets/notices/notice6.jpg",
        title: "Educación Continua: Por qué Deberías Aplicarla para Mantenerte Relevante en el Mundo Laboral",
        description: "Explora por qué la educación continua es esencial para avanzar en tu carrera en un mercado laboral en constante cambio. Obtén consejos prácticos y descubre cómo el Instituto de Capacitación Técnica TELC ofrece oportunidades de aprendizaje para el éxito en Bolivia.",
        date: "10 de septiembre 2023",
    }

];
function obtenerArticuloPorId(id) {
    return articles.find((article) => article.id === parseInt(id, 10));
}
export { articles, obtenerArticuloPorId };


