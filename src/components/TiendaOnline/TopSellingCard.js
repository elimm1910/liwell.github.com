import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//componentes
import TopSellingProduct from './TopSellingProduct';

const SectionTitle = styled.div`
position: relative;
margin-bottom: 30px;
margin-top: 15px;
h4 {
  display: inline-block;
  text-transform: uppercase;
  margin: 0px;
}
`;

function TopSellingCard({ tema }) {

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        speed: 500,
        rows: 3,
        slidesPerRow: 1,
        arrows: false
    };

    return (
        <div>
            <SectionTitle>
                <h4>Top selling</h4>
            </SectionTitle>
            <Slider {...settings}>
                {tema.tiendaVirtual.nuevos.map((nuevo) =>
                    <div key={nuevo.id}>
                        <TopSellingProduct 
                            imagen={nuevo.imagen} 
                            name={nuevo.name} 
                            price={nuevo.price}
                        />
                    </div>
                )}
            </Slider>
        </div>
    );
}


export default TopSellingCard;