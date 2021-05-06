import React from 'react';
import styled from 'styled-components';
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdbreact';

const CardHorizontalStyled = styled.div`
h4{
    font-family: 'Lobster', cursive;
}
.positionColum1{
    padding-left:0 !important;
}
`
const ImageBackground = styled.div`
width:100%;
height:100%;
background-image: ${props => props.image ? `url(${props.image})` : null};
${'' /* background-image: url('/alimentacion3.jpg'); */}
background-position: center;
background-size:cover;
`;

function CardHorizontal({ title, texto, imagen }) {
    return (
        <CardHorizontalStyled>
            <MDBCard testimonial className='mt-5'>
                <MDBRow>
                    <MDBCol md="6" lg="6">
                        <ImageBackground image={imagen}>
                        </ImageBackground>
                    </MDBCol>
                    <MDBCol md="6" lg="6" className='positionColum1'>
                        <MDBCardBody>
                            <h4>{title}</h4>
                            <hr />
                            <p>{texto}</p>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </CardHorizontalStyled>
    );
}


export default CardHorizontal;