import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MDBCard } from 'mdbreact';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CardStyled = styled.div`
  text-align: center;
  .efecto{
    position: relative;
    overflow: hidden;
  }
  .detalles{
    padding-top:5px;
    position: absolute;
    bottom: -50%;
    transition: 0.5s;
    width:100%;
    z-index:20;
    color:white;
    background: rgb(216, 46, 46);
  }
`
const ImgStyled = styled.div`
  z-index:10;
  position: relative;
  width:100%;
  transition: 3s;
  height: ${props => `${props.height}px`};
  background-image: url(${props => props.image});
  background-position: center;
  background-size:cover;

  &:hover{
    transform: scale(1.3);
  }
  &:hover ~ .detalles{
    bottom: 0px;
  }
`

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const letter1 = {
  initial: {
    y: 600,
    zIndex: 10
  },
  animate: {
    y: 0,
    zIndex: 10,
    transition: { duration: 1, ...transition }
  }
}
const letter2 = {
  initial: {
    y: 1000,
    zIndex: 10
  },
  animate: {
    y: 0,
    zIndex: 10,
    transition: { duration: 2, ...transition }
  }
}


function Card({ idLista, id, title, img, texto, size }) {

  let tamanoCard = 0;
  { size.width > size.height ? tamanoCard = size.height * 0.6 : tamanoCard = size.height * 0.4 }

  const dispatch = useDispatch();

  const refImg = useRef(null);

  const handleClick = () => {
    let dimensiones = refImg.current.getBoundingClientRect();
    dimensiones.id = id;
    const top = window.pageYOffset;
    dispatch({
      type: "CAMBIAR_DIMENSIONES",
      id, dimensiones
    })
    dispatch({
      type: "CAMBIAR_TOP",
      top
    })
  };


  return (
    <CardStyled ref={refImg}>
      <motion.div
        {...id === 1 ? { variants: letter1 } : { variants: letter2 }}
        className='mb-4'>
        <Link to={`/${idLista}/${id}`} onClick={handleClick}>
          <MDBCard news className="efecto">
            <ImgStyled
              image={img}
              height={tamanoCard}
            />
            <MDBCard className='detalles'>
              <div className="social-meta">
                <p>{title}</p>
                <p id='texto'>{texto}</p>
              </div>
            </MDBCard>
          </MDBCard>
        </Link>
      </motion.div>
    </CardStyled>
  );
}


export default Card;