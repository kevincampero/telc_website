import React from "react";

const Paragraph = ({title, subtitle, text}) => {
  return (
    <div className="container">
      <h1 className="principal-title">{title}</h1>
      <h2 className="mb-4">
        {subtitle}
      </h2>
      <p style={{fontSize:"18px", textAlign:"justify"}}>
        {text}
      </p>
    </div>
  );
};

export default Paragraph;
