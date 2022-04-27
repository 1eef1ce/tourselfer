import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {PlayIcon} from '@components/icons';

const RouteGallerySlider = (props) => {
    
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            className="route-gallery__items"
            slidesPerView='auto'
            spaceBetween={8}
            navigation
            speed={600}
            centeredSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
                768: {
                    spaceBetween: 24
                }
            }}
        >
            {props?.data?.video != "" &&
            <SwiperSlide>
                <div className="route-gallery__item video">
                    <div className="video__placeholder">
                        <Image src="/images/route-pic.jpg" alt="" title="" layout="fill"/>
                    </div>
                    <div className="video__button">
                        <div className="icon video__icon">
                            <PlayIcon/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            }

            {props?.data?.pictures && props?.data?.pictures.map(pic => (
                <SwiperSlide>
                    <div className="route-gallery__item">
                        <Image src={pic} alt="" title="" layout="fill"/>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>
    );
};

export default RouteGallerySlider;
