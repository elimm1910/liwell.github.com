import React from 'react';
import styled from 'styled-components';
import { MDBCard, MDBCardBody } from 'mdbreact';

const CardVerticalStyled = styled.div`
h4{
    font-family: 'Lobster', cursive;
}
.sizeImagen{
    width:100%;
}
`

function CardVertical({ title, texto, imagen }) {
    return (
        <CardVerticalStyled>
            <MDBCard testimonial className='mb-2'>
                <div className="card-up indigo lighten-1"></div>
                <div className='mx-auto hover zoom sizeImagen'>
                    <img className='z-depth-1-half sizeImagen' src={imagen} alt='' />
                </div>
                <MDBCardBody>
                    <h4>{title}</h4>
                    <hr />
                    <p>{texto}</p>
                    <p>Discover this endless world</p>
                </MDBCardBody>
            </MDBCard>
        </CardVerticalStyled>
    );
}


export default CardVertical;