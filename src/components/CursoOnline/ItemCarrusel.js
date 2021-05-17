import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemCarruselStyled = styled.div`
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
position: relative;
padding:20%;
scale: ${props => props.scala ? 2 : 1};
transition: 0.8s;
height:45vh;
img{
    width:100%;
    height:100%;
    z-index:1000;
}
`;


function ItemCarrusel({ curso, active, tamano, size }) {
    let scala = false;
    if (size.width >= 500) {
        if (active >= (tamano - 1)) {
            active = 0;
        } else {
            active = active + 1;
        }
    }
    curso.id === active ? scala = true : scala = false

    const dispatch = useDispatch();

    const refImg = useRef(null);

    const handleClick = () => {
        let dim = refImg.current.getBoundingClientRect();
        dispatch({
            type: "CAMBIAR_DIMENSION_ONLINECURSO",
            dim
        })
    };


    return (
        <ItemCarruselStyled scala={scala}>
            <Link to={`cursoOnline/${curso.id}/detalles`} onClick={handleClick}>
                <img src={curso.imagen} ref={refImg} alt='' />
            </Link>
        </ItemCarruselStyled>
    );
}


export default ItemCarrusel;