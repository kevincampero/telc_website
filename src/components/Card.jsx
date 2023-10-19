import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

const Card = ({ icon, title, description }) => {
  return (

    <div className="card text-center my-3">
        <div className="card-body">
            <div className="svg-container">
              {icon}
            </div>
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ description }</p>
        </div>
    </div>
  );
};

export default Card;
