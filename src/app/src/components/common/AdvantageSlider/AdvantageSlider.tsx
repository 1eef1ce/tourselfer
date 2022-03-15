import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {useState} from 'react';
import { useTranslation } from 'next-i18next';

const AdvantageSlider = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
    const {t} = useTranslation("components");

    return (
        <div className="advantages__container">
            <div className="swiper-navigation swiper-navigation--outside advantages__nav">
                <div ref={(node) => setPrevEl(node)} className="swiper-button-prev"></div>
                <div ref={(node) => setNextEl(node)} className="swiper-button-next"></div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                className="advantages__items"
                slidesPerView='auto'
                spaceBetween={0}
                navigation={{ prevEl, nextEl }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    }
                }}
            >
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">01</div>
                        <div className="advantages__img">
                            <Image src="/icons/002-Backpacker.svg" alt="" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">{t('advantages.slide1.title')}</div>
                        <div className="advantages__text">
                            {t('advantages.slide1.description')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">02</div>
                        <div className="advantages__img">
                            <Image src="/icons/036-searching.svg" alt="" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">{t('advantages.slide2.title')}</div>
                        <div className="advantages__text">
                            {t('advantages.slide2.description')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">03</div>
                        <div className="advantages__img">
                            <Image src="/icons/008-cash.svg" alt="03" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">{t('advantages.slide3.title')}</div>
                        <div className="advantages__text">
                            {t('advantages.slide3.description')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">04</div>
                        <div className="advantages__img">
                            <Image src="/icons/021-explorer.svg" alt="" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">{t('advantages.slide4.title')}</div>
                        <div className="advantages__text">
                            {t('advantages.slide4.description')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">05</div>
                        <div className="advantages__img">
                            <Image src="/icons/019-tourist.svg" alt="" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">{t('advantages.slide5.title')}</div>
                        <div className="advantages__text">
                            {t('advantages.slide5.description')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">06</div>
                        <div className="advantages__img">
                            <Image src="/icons/050-smartphone.svg" alt="06" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">{t('advantages.slide6.title')}</div>
                        <div className="advantages__text">
                            {t('advantages.slide6.description')}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AdvantageSlider;