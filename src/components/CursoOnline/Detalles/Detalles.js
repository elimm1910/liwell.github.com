import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MDBIcon } from 'mdbreact';
import { motion } from 'framer-motion';


const CardDetalles = styled(motion.div)`
  position: relative;
  width: 80vw;
  @media only screen and (min-width: 624px) {
    height: 80vh;
}
  margin: 10vh auto;
  background-color: #FFF;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`;
const MenuTabNab = styled.ul`
position: absolute;
display: flex;
justify-content: space-between;
width: 60%;
li {
  display: inline-block;
  text-align: center;
  h4{
    color: #464141;
    font-weight: 700;
    font-size:2vw;
  }
  p{
    color: grey;
    font-weight: 600;
    margin-top:-10px;
  }
}
@media only screen and (min-width: 624px) {
  top:70%;
}
@media only screen and (max-width: 624px) {
  top: 20vh;
  position: relative;
  width: 100%;
  margin-left:-30px;
  li h4{
    font-size:4vw;
  }
  li p{
    font-size:3.5vw;
  }
}
`;
const ImagenDetalles = styled(motion.div)`
  position:absolute;
  background-image: url(${props => props.image});
  background-position: center;
  background-size:cover;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  z-index:10;
`;
const RightDetalles = styled.div`
  margin-left: 50vw;
  margin-right: 20px;
  h1 {
  padding-top: 15px;
  font-size: 1.3rem;
  color: #4B4B4B;
  }
  p {
  text-align: justify;
  padding-top: 10px;
  font-size: 0.95rem;
  line-height: 150%;
  color: #4B4B4B;
  }
  @media only screen and (max-width: 624px) {
    margin-top: 18vh;
    margin-left: 20px;
    padding-bottom:30px;
    p{
      padding-top: 5px;
      font-size: 0.9rem;
    }
}
`;
const AuthorDetalles = styled.div`
  img {
  margin-left: 10px;
  float: left;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
  h2 {
  padding-top: 8px;
  margin-right: 6px;
  text-align: right;
  font-size: 15px;
  font-weight: 600;
}
`;
const SeparatorDetalles = styled.div`
  margin-top: 10px;
  border: 1px solid rgb(216, 46, 46);
`;
const FabDetalles = styled.div`
  position: absolute;
  right: 50px;
  bottom: -40px;
  box-sizing: border-box;
  padding-top: 18px;
  background-color: rgb(216, 46, 46);
  width: 80px;
  height: 80px;
  color: white;
  text-align: center;
  border-radius: 50%;
  -webkit-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
`;

const transition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] };

function Detalles(props) {
  const lista = useSelector((state) => state.lista);
  const dimension = useSelector((state) => state.dimension_OnlineCurso);
  const size = useSelector((state) => state.size);
  let idLista = props.match.params.photoId;
  let idSubtema = props.match.params.temaId;
  let idCurso = props.match.params.cursoId;

  let curso = lista[idLista].subtema[idSubtema].cursoOnline.cursos[idCurso];

  let width = 0;
  let height = 0;
  let left = 0;
  if (size.width > 624) {
    width = '40vw';
    height = '25vw';
    left = '12vw';
  } else {
    width = '70vw';
    height = '20vh';
    left = '15vw';
  }

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'>
      <ImagenDetalles
        image={curso.imagen}
        initial={{
          top: dimension.top,
          left: dimension.left,
          width: dimension.width,
          height: dimension.height,
        }}
        animate={{
          left: left,
          top: '7vh',
          height: height,
          width: width,
          transition: { transition }
        }}>
      </ImagenDetalles>
      <CardDetalles>
        <MenuTabNab>
          <li>
            <img src='/creditos.png' />
            <h4>60 creditos</h4>
            <p>Carga lectiva</p>
          </li>
          <li>
            <img src='/calendario.png' />
            <h4>1 año</h4>
            <p>Duracion</p>
          </li>
          <li>
            <img src='/euro.png' />
            <h4>13.68 €</h4>
            <p>/ credito</p>
          </li>
          <li>
            <img src='/euros.png' />
            <h4>820.8 €</h4>
            <p>Pecio Total</p>
          </li>
        </MenuTabNab>
        <RightDetalles>
          <h1>{curso.name}</h1>
          <AuthorDetalles>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6jRChzZtmtRqmwFnYw-PMlAo0VKN28F_qQ&usqp=CAU" />
            <h2>{curso.nameProfesor}</h2>
          </AuthorDetalles>
          <SeparatorDetalles />
          <p>{curso.descroption}</p>
          <p>{curso.descroption}</p>
          <p>{curso.descroption}</p>
        </RightDetalles>
        <FabDetalles>
          <MDBIcon icon="sign-in-alt" size="3x" />
        </FabDetalles>
      </CardDetalles>
    </motion.div>
  );
}


export default Detalles;