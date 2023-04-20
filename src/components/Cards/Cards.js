import Card from "./Card"
import './Cards.css'
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';



const Cards = () => {
    const [tabn, setTabn] = useState([])


    useEffect(() => {
        //pido los datos 
        fetch('./noticias/noticias.json')
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                setTabn(json)
            })


    }, [])
    return (<div>
        <div className="container  justify-content-center align-items-center ">
            <Swiper
                effect={'coverflow'}

                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}

                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 25,
                    },
                    "@0.50": {
                      slidesPerView: 1.25,
                      spaceBetween: 25,
                    },
                    "@1.00": {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    },
                    "@1.25": {
                      slidesPerView: 2.5,
                      spaceBetween: 20,
                    },
                    "@1.50": {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    "@1.75": {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}

                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}


                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {
                    tabn.map(tabn => {
                        return (
                            <div key={tabn.idnoticia}>
                                <SwiperSlide  >


                                    <Card titulo={tabn.titulo} imagen={tabn.imagen} texto={tabn.texto} linkN={tabn.linkn} />
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
 
                <div className="slider-controler  ">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div ></div>
                </div>
            </Swiper>
        </div>
        </div>
    )

}
export default Cards
