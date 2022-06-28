import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
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
        options={{
          autoplay:true,
          type: 'loop',
          autoplaySpeed:1500,
          arrows:true,
          centerMode:true,
          slidesToShow:1,
          slidesToScroll:1
          // arrows: true, 
          // pagination: false, 
          // autoplay: true, 
          // autoplaySpeed:1500,
          // pauseOnHover : true, 
          // pauseOnFocus : false, 
          // resetProgress: false
          // autoScroll: {
          //   speed: 1, 
          //   pauseOnHover: false,
          //   pauseOnFocus: false
          // }
        }}
        // extensions={{ AutoScroll }}
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
