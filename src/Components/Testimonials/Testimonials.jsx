import "./Testimonials.css";
import {Data} from "./Data";
import React from "react";

import{ Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


export const Testimonials = () =>{
    return (
      <section className="testimonials container section" id="home" >
          <h1 className="section__title">
              <span className="word1">TESTIM</span> 
              <span className="word2">ONIALS</span>
            </h1>
            <span className="section__subtitle">What my collegues have to say about my work</span>
            
            <Swiper className="testimonials__container"
                loop={true}
                grabCursor={true}
                spaceBetween ={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints = {{
                    576:{
                        slidesPerView: 2,
                    },
                    768:{
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}>
                {Data.map(({id,image, title, description}) =>{
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className="testimonial__img" />
                            <p className="testimonial_description">
                                {description}
                            </p>
                            <h3 className="testimonial__name">- {title}</h3>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
      </section>
    )
}