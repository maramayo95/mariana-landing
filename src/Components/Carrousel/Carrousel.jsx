import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import './Carrousel.css'




const Carrousel = () => {
  const arrImg = [
      {
        id: 1,
        img: [img1], 
        text: "Hola"
      },
      {
        id : 2,
        img: [img2],
        text: "Chau"
      },
      {
        id:3 ,
        img : [img3],
        text: "tito"
      },
      {
        id:4,
        img : [img4],
        text: "el pity"
      }
  ]
  return (
    <div>
      <Splide className="splide" options={{ rewind: true , arrows: true, pagination:true}} aria-label="React Splide Example">
        
        {
          arrImg.map(arr => (

            <SplideSlide className="splide-flex" key={arr.id}>
              <img src={arr.img}  alt="Image 1" className="img-splide" />
              <div className="text-flex">
              <h1>{arr.text}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione laborum voluptatem voluptate veritatis tenetur vero, sed, perferendis numquam suscipit sapiente accusamus ipsam magni aliquam odio recusandae quas in eos.</p>
              </div>
            </SplideSlide>
          ))
        }
  
      </Splide>
    </div>
  );
};

export default Carrousel;
