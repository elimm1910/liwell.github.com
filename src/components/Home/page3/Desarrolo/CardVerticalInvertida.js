import React from 'react';
import styled from 'styled-components';
import { MDBCard, MDBCardBody } from 'mdbreact';

const CardVerticalInvertidaStyled = styled.div`
h4{
    font-family: 'Lobster', cursive;
}
.sizeImagen{
    width:100%;
}
`

function CardVerticalInvertida({ title, texto, imagen }) {
    return (
        <CardVerticalInvertidaStyled>
            <div className='mb-2'>
                <MDBCard testimonial>
                    <div className="card-up indigo lighten-1"></div>
                    <MDBCardBody>
                        <h4>{title}</h4>
                        <hr />
                        <p>{texto}</p>
                        <p>Discover this endless world</p>
                    </MDBCardBody>
                    <div className='mx-auto hover zoom sizeImagen'>
                        <img className='z-depth-1-half sizeImagen' src={imagen} alt='Imagen' />
                    </div>
                </MDBCard>
            </div>
        </CardVerticalInvertidaStyled>
    );
}


export default CardVerticalInvertida;