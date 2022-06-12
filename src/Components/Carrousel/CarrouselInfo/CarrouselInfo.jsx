import React from "react";
import "../Carrousel.css";
const CarrouselInfo = ({arr}) => {
  return (
    <>
      <img src={arr.img} alt="Image 1" className="img-splide" />
      <div className="text-flex">
        <h1>{arr.title}</h1>
        <p>
          {arr.text}
        </p>
      </div>
    </>
  );
};

export default CarrouselInfo;
