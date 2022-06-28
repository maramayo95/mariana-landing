import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

import React from 'react'

const Carrousel2 = () => {



    return (
        <Splide
            options={{
                rewind: true,
                gap: '1rem',
                autoplay: true,
                autoplaySpeed:1500,
                arrows:true,
                centerMode:true,
                slidesToShow:1,
                slidesToScroll:1
            }}
            aria-label="My Favorite Images"
        >
            <SplideSlide>
                <img src="https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg" alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg" alt="Image 3" />
            </SplideSlide>
        </Splide>
    )
}

export default Carrousel2