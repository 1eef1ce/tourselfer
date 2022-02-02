import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import {useState} from 'react'

const AdvantageSlider = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
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
                            <Image src="/icons/002-Backpacker.svg" alt="01" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">You are the boss!</div>
                        <div className="advantages__text">
                            You can start at any time, take time out, deviate from the route. Nobody adjusts,
                            does not limit intime. If you like the location - stay late, not interested - feel
                            free to move on!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">02</div>
                        <div className="advantages__img">
                            <Image src="/icons/036-searching.svg" alt="02" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">Не трать время на поиск</div>
                        <div className="advantages__text">
                            Достопримечательностей. Еды. Ближайших остановок и транспорта. Бесплатного Wi-Fi.
                            Уборных. Времени работы музеев, выставок, торговых центров... Положись на навигатор -
                            он в курсе актуальной информации.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">03</div>
                        <div className="advantages__img">
                            <Image src="/icons/008-cash.svg" alt="03" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">Не трать деньги</div>
                        <div className="advantages__text">
                            На дорогие экскурсии с оплатой за каждую персону. Покупай один тур, а в путь
                            отправляйся с дружной компанией.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">04</div>
                        <div className="advantages__img">
                            <Image src="/icons/021-explorer.svg" alt="04" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">Без потерь</div>
                        <div className="advantages__text">
                            Приложение синхронизируется с картами Google, где отмечены все точки маршрута.
                            Даже в незнакомом городе не потеряешься!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">05</div>
                        <div className="advantages__img">
                            <Image src="/icons/019-tourist.svg" alt="05" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">Твой путь — твой выбор</div>
                        <div className="advantages__text">
                            Обзорное знакомство, популярные туристические направления и уникальные маршруты для
                            тех, кто уже все видел. Выбирай то, что интересно тебе!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="advantages__item">
                        <div className="advantages__number">06</div>
                        <div className="advantages__img">
                            <Image src="/icons/050-smartphone.svg" alt="06" title="" layout="fill"/>
                        </div>
                        <div className="title-3 advantages__title">Интернет не нужен!</div>
                        <div className="advantages__text">
                            Если ты за границей, навигатор проведет тебя по выбранному маршруту без подключения
                            к мобильному интернету.
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AdvantageSlider