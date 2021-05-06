import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//componentes
import Videos from './GripVideos/Videos';
import Ofertas from './Ofertas';
import Footer from './Footer/Footer';
import SignUp from '../../Auth/SignUp';
import Reproductor from './GripVideos/Reproductor';

const TemasStyled = styled.div`
`
const TemeContainer = styled(motion.div)`
margin: 0 !important;
height: 100%;
width: 100%;
`;
const PositionTitle = styled(motion.div)`
position:absolute;
width:100%;
`;
const Title = styled(motion.div)`
position:relative;
overflow: hidden;
font-family: 'Lobster', cursive;
text-align:center;
margin-top: ${props => `${props.marginTop}px`};
font-size: ${props => props.fontSize};
span{
  display:inline-block;
}
`;
const ImageSingle = styled(motion.div)`
overflow: hidden;
z-index:-1;
background-image: url(${props => props.image});
background-position: center;
background-size:cover;
`;
const OfertsContainer = styled.div`
margin-top: 10%;
`;
const TemaVideosStyled = styled.div`
  width:100%;
  margin-top: ${props => props.marginTop};
`
const DialogoStyled = styled.div`
  position: fixed;
  z-index: 1000000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

const transition = { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  animate: {
    transition: {
      delayChildren: .6,
      staggerChildren: .04,
      staggerDirection: 1,
    }
  }
}

const letter = {
  initial: {
    y: 600,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition }
  }
}

function Tema(props) {
  const [dialogo, setDialogo] = useState(false);
  const [reproductor, setReproductor] = useState(false);
  const [video, setVideo] = useState('');
  const [preview, setPreview] = useState('');

  const lista = useSelector((state) => state.lista)
  const size = useSelector((state) => state.size)
  const dimensiones = useSelector((state) => state.dimensiones)


  const idLista = props.match.params.photoId;
  const id = props.match.params.temaId;

  let key = 0;
  let fontSize = 0;
  let yPosition = 0;

  if (size.width > size.height) {
    fontSize = '7vw';
    yPosition = '70%';
  } else {
    fontSize = '15vw';
    yPosition = '85%';
  }


  const handleClick = () => {
    setDialogo(true)
  }
  const handleClickVideo = (e) => {
    setVideo(e.target.attributes.src.value);
    setPreview(e.target.attributes.poster.value);
    setReproductor(true)
  }
  const handleClose = () => {
    setDialogo(false)
  }
  const handleVideoClose = () => {
    setReproductor(false)
  }
  return (
    <TemasStyled>
        <TemeContainer
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <PositionTitle>
            <Title marginTop={size.height * 0.2} fontSize={fontSize} >
              {lista[idLista].subtema[id].title.split(' ').map((palabras) =>
                <motion.span variants={firstName} className='mr-3' key={key++}>
                  {palabras.split('').map((title) =>
                    <motion.span variants={letter} key={key++}>{title}</motion.span>
                  )}
                </motion.span>
              )}
            </Title>
          </PositionTitle>
          <ImageSingle
            image={lista[idLista].subtema[id].imagen}
            initial={{
              x: dimensiones[id].x,
              y: dimensiones[id].y,
              width: dimensiones[id].width,
              height: dimensiones[id].height,
            }}
            animate={{
              x: '0',
              y: yPosition,
              width: '100%',
              height: '60vh',
              transition: { transition },
            }}
           >
          </ImageSingle>

          <TemaVideosStyled marginTop='50vh'>
            <Videos
              lista={lista}
              idLista={idLista}
              idSubtema={id}
              size={size}
              handleClickVideo={handleClickVideo}
            />
          </TemaVideosStyled>

          <OfertsContainer className='container'>
            <Ofertas
              lista={lista}
              idLista={idLista}
              idSubtema={id}
              size={size}
            />
          </OfertsContainer>

          <Footer
            handleClick={handleClick}
            lista={lista}
            idLista={idLista}
            idSubtema={id}
          />
        </TemeContainer>

        {dialogo ?
          <DialogoStyled>
            <SignUp
              handleClose={handleClose}
            />
          </DialogoStyled> : null}

        {reproductor ?
          <DialogoStyled>
            <Reproductor
              video={video}
              imagen={preview}
              handleClose={handleVideoClose}
              size={size}
            />
          </DialogoStyled> : null}
    </TemasStyled>
  );
}

export default Tema;