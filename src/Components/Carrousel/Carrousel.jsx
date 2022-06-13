import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "./Carrousel.css";

import { arrImg } from "../../../mock/carrouselMock";
import CarrouselInfo from "./CarrouselInfo/CarrouselInfo";

const Carrousel = () => {
  const [carImg, setCarImg] = useState([]);

  useEffect(() => {
    setCarImg(arrImg);
  }, [arrImg]);

  return (
    <div id="home">
      <Splide
        className="splide"
        options={{ rewind: true, arrows: true, pagination: false }}
        aria-label="React Splide Example"
      >
        {carImg.map((arr) => (
          <SplideSlide className="splide-flex" key={arr.id}>
            <CarrouselInfo arr={arr} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carrousel;
