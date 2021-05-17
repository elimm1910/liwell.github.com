import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

//componentes
import ListHorizontalCard from './ListHorizontalCard';


const DetailStyled = styled.div`
span{
  display:inline-block;
}
`
const MarginListTema = styled.div`
position:relative;
overflow: hidden;
margin-top: 20vh;
`;
const MarginDetailStyled = styled.div`
position:relative;
overflow: hidden;
margin-top: 20vh;
background: rgb(216, 46, 46);
color: white;
z-index:10;
border-top-left-radius: 100px;
border-top-right-radius: 100px;
-webkit-border-top-right-radius:100;
-moz-border-top-right-radius:100;
width:100%;
heigth:100%;
h1{
  text-align:center;
  padding-top:5%;
  margin-left:10%;
  margin-right:10%;
}
p{
  margin-top:5%;
  margin-left:10%;
  margin-right:10%;
  padding-bottom:5%;
  margin-bottom:0 !important;
}
`;
const DetailWrapper = styled(motion.div)`
margin: 0 !important;
height: 100%;
width: 100%;
`;
const ImageWrapper = styled(motion.div)`
position: fixed;
overflow: hidden;
z-index:-1;
`;
const ImageFondo = styled(motion.img)`
position:absolute;
width:100%;
height:100%;
`;


const transition = { duration: 10, ease: [0.6, 0.01, -0.05, 0.9] };

function Detail(props) {
  const lista = useSelector((state) => state.lista)
  const size = useSelector((state) => state.size)
  const localizacion = useSelector((state) => state.localizacion)

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const id = props.match.params.photoId;
  let tamanoLocalizacion = localizacion.length;

  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  if (size.width > size.height) {
    x = '74%';
    y = '-6.57%';
    width = size.width * 0.5;
    height = size.height * 0.7;
  } else {
    x = '17.2%';
    y = '50%';
    width = size.width * 0.7;
    height = size.height * 0.5;
  }

  return (
    <DetailStyled>
      <DetailWrapper
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {tamanoLocalizacion === 1 ?
          <ImageWrapper
            initial={{
              x: x,
              y: y,
              width: width,
              height: height
            }}
            animate={{
              x: '0',
              y: '-20%',
              width: '100%',
              height: '100%',
              // height: size.height,
              transition: { transition },
              opacity: 0.3,
            }}
          >
            <ImageFondo
              style={{ scale: scale }}
              initial={{
                width: '100%',
                scale: 1
              }}
              animate={{
                transition: { transition },
              }}
              src={lista[id].url} />
          </ImageWrapper>
          :
          <ImageWrapper
            initial={{
              x: '0%',
              y: '-20%',
              width: '100%',
              height: size.height,
              opacity: '0.3',
            }}
          >
            <ImageFondo
              style={{ scale: scale }}
              src={lista[id].url} />
          </ImageWrapper>
        }

        <MarginListTema>
          <ListHorizontalCard
            lista={lista}
            id={id}
            size={size}
          />
        </MarginListTema>

        <MarginDetailStyled>
          <h1>{lista[id].titleInformacion}</h1>
          <p>{lista[id].informacion}</p>
        </MarginDetailStyled>
      </DetailWrapper>
    </DetailStyled>
  );
}

export default Detail;