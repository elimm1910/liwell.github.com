import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//componentes
import CardProductOnline from '../componentesGLB/CardProductOnline';

function SliderNewProducts({ lista, idLista, idSubtema }) {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className='ml-5 mr-5'>
      <Slider {...settings}>
        {lista[idLista].subtema[idSubtema].tiendaVirtual.nuevos.map((producto) =>
          <div key={producto} className='p-3 pb-5'>
            <CardProductOnline
              producto={producto}
            />
          </div>
        )}
      </Slider>
    </div>
  );
}


export default SliderNewProducts;

