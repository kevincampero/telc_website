import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <div className="container-fluid banner">
      <div className="container banner-content">
        <div className="banner-info">
          <h6 style={{ color: "#c71c3b", fontSize: "20px" }}>Intituto TELC</h6>
          <h1 className="text-dark">
              Aprende y Certifícate con Nosotros
          </h1>
          <p className="text-dark" style={{ fontSize: "16px" }}>
              Descubre una amplia gama de cursos cortos diseñados para impulsar tu carrera en Bolivia.
          </p>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Número de Celular"
            />
            <div className="input-group-append">
              <button
                className="btn btn-dark"
                type="button"
              >
                Suscribirse
              </button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Banner;
