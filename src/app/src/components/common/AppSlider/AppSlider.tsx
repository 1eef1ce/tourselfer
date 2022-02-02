import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const AppSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            className="app__items"
            slidesPerView='auto'
            centeredSlides
            loop
            loopedSlides={5}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="app__item">
                    <div className="app__img">
                        <Image src="/images/app-1.png" alt="slide1" title="" layout="fill"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app__item">
                    <div className="app__img">
                        <Image src="/images/app-2.png" alt="slide2" title="" layout="fill"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app__item">
                    <div className="app__img">
                        <Image src="/images/app-3.png" alt="slide3" title="" layout="fill"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app__item">
                    <div className="app__img">
                        <Image src="/images/app-1.png" alt="slide4" title="" layout="fill"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app__item">
                    <div className="app__img">
                        <Image src="/images/app-2.png" alt="slide5" title="" layout="fill"/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default AppSlider;
