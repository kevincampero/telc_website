import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./callout.css";

const Callout = ({ image, smallTitle, title, description, buttonText, buttonUrl, reverse }) => {
  const calloutClasses = reverse ? "callout d-flex container py-5 reverse" : "callout d-flex container py-5";

  return (
    <div className={calloutClasses}>
      <div className="callout-content col-lg-6 col-sm-12 px-4 d-flex flex-column justify-content-center">
        <h2 className="small-title" style={{  }}>
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
      <div className="callout-image col-lg-6 col-sm-12">
        <img src={image} alt="Callout Image" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Callout;
