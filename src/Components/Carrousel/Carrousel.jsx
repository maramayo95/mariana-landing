import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img from '../../img/img.jpg'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import './Carrousel.css'



const Carrousel = () => {
  return (
    <div>
      <Splide className="splide" options={{ rewind: true , arrows: false, pagination:false }} aria-label="React Splide Example">
        <SplideSlide className="splide-flex">
          <img src={img1} alt="Image 1" />
          <h1>Hola</h1>
        </SplideSlide>
        <SplideSlide className="splide-flex">
          <img src={img2} alt="Image 2" />
          <h1>Hola asdasdsadasdsadsadsadasasd</h1>
        </SplideSlide>
        <SplideSlide className="splide-flex">
          <img src={img3} alt="Image 2" />
          <h1>Hola asdasdsadasdsadsadsadasasd</h1>
        </SplideSlide>
        <SplideSlide className="splide-flex">
          <img src={img4} alt="Image 2" />
          <h1>Hola asdasdsadasdsadsadsadasasd</h1>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carrousel;
