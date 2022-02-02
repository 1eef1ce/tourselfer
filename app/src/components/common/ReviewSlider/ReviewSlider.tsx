import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import {Avatar} from '@components/common';
import {Rating} from '@components/ui';
import {ArrowRight, Quotes} from '@components/icons';
import {useState} from 'react';

const ReviewSlider = () => {
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
                <SwiperSlide>
                    <div className="reviews__item">
                        <div className="user">
                            <div className="user__img">
                                <div className="icon user__icon">
                                    <Quotes />
                                </div>
                                <Avatar/>
                            </div>
                            <div>
                                <div className="user__status">traveller</div>
                                <div className="user__name">Karen Martin</div>
                            </div>
                        </div>
                        <div className="rating reviews__rating">
                            <div className="rating__number">4.0</div>
                            <Rating value={4} />
                        </div>
                        <div className="reviews__content">
                            <div className="reviews__block reviews__block--first">
                                <span>Recommends a route:</span>
                                <span className="reviews__text">Yes</span>
                            </div>
                            <div className="reviews__block">
                                <span>Liked:</span>
                                <span className="reviews__text">
                                    Sights. Food. The nearest stops and transport. Free Wi-Fi. Restrooms. Opening
                                    hours of museums,exhibitions, shopping centers... Rely on the navigator - it
                                    is up to date with the latest information. Sights. Food. The nearest stops and
                                    transport. Free Wi-Fi. Restrooms. Opening hours of museums, exhibitions,
                                    shopping centers ... Rely on the navigator - it is up to date with the latest
                                    information, exhibitions, shopping
                                </span>
                            </div>
                        </div>
                        <Link href="#">
                            <a className="reviews__link link link--arrow link--color">
                                <span>Entire review</span>
                                <span className="icon">
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews__item">
                        <div className="user">
                            <div className="user__img">
                                <div className="icon user__icon">
                                    <Quotes />
                                </div>
                                <Avatar/>
                            </div>
                            <div>
                                <div className="user__status">traveller</div>
                                <div className="user__name">Karen Martin</div>
                            </div>
                        </div>
                        <div className="rating reviews__rating">
                            <div className="rating__number">5.0</div>
                            <div className="rating__stars">
                                <Rating value={5} />
                            </div>
                        </div>
                        <div className="reviews__content">
                            <div className="reviews__block reviews__block--first">
                                <span>Recommends a route:</span>
                                <span className="reviews__text">Yes</span>
                            </div>
                            <div className="reviews__block">
                                <span>Liked:</span>
                                <span className="reviews__text">
                                    Sights. Food. The nearest stops and transport. Free Wi-Fi. Restrooms. Opening
                                    hours of museums, exhibitions, shopping centers ... Rely on the navigator -
                                    it is up to date with the latest information.
                                </span>
                            </div>
                            <div className="reviews__block">
                                <span>Not like:</span>
                                <span className="reviews__text">Sights. Food.</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="reviews__item">
                        <div className="user">
                            <div className="user__img">
                                <div className="icon user__icon">
                                    <Quotes />
                                </div>
                                <Avatar/>
                            </div>
                            <div>
                                <div className="user__status">traveller</div>
                                <div className="user__name">Karen Martin</div>
                            </div>
                        </div>
                        <div className="rating reviews__rating">
                            <div className="rating__number">4.0</div>
                            <Rating value={4} />
                        </div>
                        <div className="reviews__content">
                            <div className="reviews__block reviews__block--first">
                                <span>Recommends a route:</span>
                                <span className="reviews__text">Yes</span>
                            </div>
                            <div className="reviews__block">
                                <span>Liked:</span>
                                <span className="reviews__text">
                                    Sights. Food. The nearest stops and transport. Free Wi-Fi. Restrooms. Opening
                                    hours of museums,exhibitions, shopping centers... Rely on the navigator - it
                                    is up to date with the latest information. Sights. Food. The nearest stops and
                                    transport. Free Wi-Fi. Restrooms. Opening hours of museums, exhibitions,
                                    shopping centers ... Rely on the navigator - it is up to date with the latest
                                    information, exhibitions, shopping
                                </span>
                            </div>
                        </div>
                        <Link href="#">
                            <a className="reviews__link link link--arrow link--color">
                                <span>Entire review</span>
                                <span className="icon">
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ReviewSlider;