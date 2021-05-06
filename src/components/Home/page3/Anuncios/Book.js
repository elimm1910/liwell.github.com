import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const BookStyled = styled.div`
    text-align: center;
    width:100%;
    height:100%;
h1{
    font-family: 'Lobster', cursive;
    margin-bottom: 12px;
    position: relative;
    color: black;
}
p{
    color: black;
}
`
const ImageWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
    width:100%;
    height:100%;
    cursor: pointer;
}
`;
const Section = styled.div`
transform-style: preserve-3d;
perspective: 1000px;
`;
const ImagenBookStyled = styled.div`
    position: relative;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
    margin-left:5%;
    width: 90%;
    height:100%;
    transform-style: preserve-3d;
    transition: 0.5s;
    margin-top: 20px;
    &:hover{
    transform: rotateY(35deg);
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
}
    &:active {
    transform: rotateY(180deg);
    box-shadow: 0px 20px 20px rgba(34, 30, 30, 0.2);
}
    &::before {
    content: '';
    transform-origin: left;
    background: url(${props => props.side});
    background-size: cover;
    transform: rotateY(90deg);
    position: absolute;
    background-position: center;
    height: 100%;
    width: 50px;
}
    &::after {
    content: '';
    transform-origin: left;
    background-image: url(${props => props.back});
    background-size: cover;
    transform: rotateY(180deg) translateZ(50px);
    position: absolute;
    background-position: center;
    height: 100%;
    width: 100%;
}
`
const ImagenStyled = styled.img`
 height: ${props => props.height};
`

function Book({ texto, imagenFront, imagenBack, imagenSide, size }) {
    var height = 0;
    { size.width > size.height ? height = size.height * 0.4 : height = size.height * 0.7 }
    return (
        <BookStyled>
                <h1>Ebook</h1>
                <div>
                    <ImageWrapper>
                        <Section>
                            <ImagenBookStyled side={imagenSide} back={imagenBack}>
                                <ImagenStyled src={imagenFront} alt="" height={height} />
                            </ImagenBookStyled>
                        </Section>
                    </ImageWrapper>
                    <div className="mt-4">
                        <p>{texto}</p>
                    </div>
                    <div className='mx-auto'>
                        <Link to={`/libro`} className="btn btn-danger btn-rounded">See book</Link>
                    </div>
                </div>
        </BookStyled>
    );
}


export default Book;