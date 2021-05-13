import React from 'react';
import styled from 'styled-components';
import { MDBCardBody, MDBBtn } from 'mdbreact';

const CardImagenStyled = styled.div`
.cardOfertaDia{
    background: white;
    color:black;
    position:absolute;
    right:8%;
    width:40%;
}
.cardOfertaDia2{
    background: white;
    color:black;
    position:absolute;
    left:10%;
    width:80%;
}
h4{
    font-family: 'Lobster', cursive;
}
`
const CentrarVertical = styled.div`
display: flex;
align-items:center;
`;
const ImagenStyled = styled.img`
 width:100%;
 height: ${props => props.size < 1000 ? '600px' : null};
`

function CardImagen({ texto, imagen, size }) {
    let classe = '';
    size.width > 1000 ? classe = 'cardOfertaDia' : classe = 'cardOfertaDia2';

    return (
        <CardImagenStyled>
            <CentrarVertical>
                <ImagenStyled src={imagen} size={size.width} />
                <MDBCardBody className={classe}>
                    <h4>Special Offer of the Day</h4>
                    <hr />
                    <p>
                        Appreciate the specialties offered by the experts especially for you
                    </p>
                    <div>
                        <p>{texto}</p>
                        <MDBBtn color='red'>See</MDBBtn>
                    </div>
                </MDBCardBody>
            </CentrarVertical>
        </CardImagenStyled>
    );
}


export default CardImagen;