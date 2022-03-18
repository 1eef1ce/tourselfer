import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewSlide from './ReviewSlide';

import {useState} from 'react';

const ReviewSlider = ({items, route}) => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
    return (
        <div className="reviews__container">
            <div className="swiper-navigation swiper-navigation--outside reviews__nav">
                <div ref={(node) => setPrevEl(node)} className="swiper-button-prev"></div>
                <div ref={(node) => setNextEl(node)} className="swiper-button-next"></div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                className="reviews__items"
                slidesPerView='auto'
                spaceBetween={0}
                navigation={{ prevEl, nextEl }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    }
                }}
            >
                {items && items.length>0 && items.map(item => (
                    <SwiperSlide key={item.id}>
                        <ReviewSlide item={item} route={route} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ReviewSlider;