import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {PlayIcon} from '@components/icons';

const RouteGallerySlider = (props) => {
    let video = null;
    if (props?.data?.video.toString() != "") {

        if (props?.data?.video.indexOf('youtube.com') != -1) {
            let codeMatch = props.data.video.match(/v=([0-9A-Za-z]+)/i);
            if (Array.isArray(codeMatch) && codeMatch.length >= 2 && codeMatch[1].toString() != "") {
                video = {
                    url: props?.data?.video,
                    preview: 'https://img.youtube.com/vi/'+codeMatch[1].toString()+'/maxresdefault.jpg'
                };
            }
        }

    }

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
            {video &&
            <SwiperSlide>
                <div className="route-gallery__item video">
                    <div className="video__placeholder">
                        <Image src={video.preview} alt={props?.data?.title} title={props?.data?.title} layout="fill"/>
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
                        <Image src={pic} alt={props?.data?.title} title={props?.data?.title} layout="fill"/>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>
    );
};

export default RouteGallerySlider;
