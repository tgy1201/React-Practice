import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import SwipCore from 'swiper';
import {Navigation,Pagination, Autoplay} from 'swiper/modules'

import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwipCore.use([Navigation, Pagination, Autoplay]);

function Banner () {
    return(
        <Swiper
            className="banner"
            spaceBetween={50}
            slidesPerView={1}
            pagination={{clickable:true}}
            navigation
            autoplay={{delay:5000}}>
            <SwiperSlide>
                <img src = '/logo192.png'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src = '/logo192.png'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src = '/logo192.png'></img>
            </SwiperSlide>    
        </Swiper>
    )
}

export default Banner;