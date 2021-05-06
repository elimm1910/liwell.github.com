import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//componentes
import ItemCarrusel from './ItemCarrusel';

const CarruselStyled = styled.div`
height: 100%;
width:100%;
`
function Carrusel({ lista, idLista, idSubtema, active, setActive, size }) {
    const settings = {
        className: "center",
        centerPadding: "60px",
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        beforeChange: (current, next) => { setActive(next) },
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <CarruselStyled>
            <div className='ml-5 mr-5'>
                <Slider {...settings}>
                    {lista[idLista].subtema[idSubtema].cursoOnline.cursos.map((curso) =>
                        <ItemCarrusel
                            curso={curso}
                            active={active}
                            tamano={lista[idLista].subtema[idSubtema].cursoOnline.cursos.length}
                            size={size}
                        />
                    )}
                </Slider>
            </div>
        </CarruselStyled>
    );
}


export default Carrusel;
