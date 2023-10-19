import React from "react";
import "./statement.css";

const Statement = ({ title, description, enlace }) => {
  return (
    <div className="container my-2">
      <div className="statement card">
        <div className="card-text d-flex justify-content-center align-items-start flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-description">{description}</p>  
        </div>
        <div className="card-description d-flex justify-content-center align-items-center">
          <a href={enlace} className="btn">Saber más</a>
        </div>
      </div>
    </div>
  );
};

export default Statement;