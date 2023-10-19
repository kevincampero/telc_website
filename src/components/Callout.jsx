import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./callout.css";

const Callout = ({ image, smallTitle, title, description, buttonText, buttonUrl }) => {
  return (
    <div className={"callout d-flex container py-5"}>
      <div className="callout-image col-lg-6 col-sm-12">
        <img src={image} alt="Callout Image" style={{width: "100%"}} />
      </div>
      <div className="callout-content col-lg-6 col-sm-12 px-4 d-flex flex-column justify-content-center">
        <h2 className="small-title" style={{ color: "#c71c3b", fontSize: "20px" }}>
          {smallTitle}
        </h2>
        <h1 className="main-title">
          {title}
        </h1>
        <p className="callout-description">{description}</p>
        <a href={buttonUrl}>
          <button className="callout-button px-3 py-2">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Callout;
