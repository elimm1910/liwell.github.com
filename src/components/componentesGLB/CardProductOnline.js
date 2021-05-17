import React from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

//comonents
import CardBody from './CardBody';

const CardWrapperProductoOnline = styled.div`
${'' /* perspective: 2000px; */}
margin: 0;
padding: 0;
outline: none;
`;
const ContainerProductoOnline = styled(motion.div)`
width: 250px;
height: 500px;
margin: 30px auto;
cursor: grab;

@media only screen and (max-width: 700px) {
  width: 220px;
}
`;
const CardProduct = styled.div`
border-radius: 25px;
box-shadow: -11px 11px 1px rgba(0, 0, 0, 0.3);
`;
const CardHeardProductOnline = styled.div`
position: relative;
height: 200px;
background: rgb(216, 46, 46);
border-radius: 25px 25px 0 0;
`;
const ProductImgProductOnline = styled(motion.div)`
width:auto;
position: absolute;
left: -15%;
img{
  width: 23vw;
  margin-top: -16px;
  margin-left: 50px;
  @media only screen and (max-width: 900px) {
    width: 30vw;
  }
  @media only screen and (max-width: 650px) {
    width: 40vw;
  }
  @media only screen and (max-width: 400px) {
    width: 60vw;
  }
}
`;
const BackTextProductOnline = styled.span`
display: inline-block;
font-size: 125px;
font-weight: 900;
margin-left: -7px;
margin-top: 100px;
opacity: 0.1;
@media only screen and (max-width: 900px) {
  font-size: 110px;
}
@media only screen and (max-width: 650px) {
  font-size: 100px;
}
`;


function CardProductOnline({ producto, size }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapperProductoOnline>
    {size.width > size.height ?
      <ContainerProductoOnline
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <CardProduct>
          <CardHeardProductOnline>
            <ProductImgProductOnline
              style={{ x, y, rotateX, rotateY, z: 10000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={producto.imagen} alt="Shoe" />
            </ProductImgProductOnline>
            <BackTextProductOnline>
              FAS
            </BackTextProductOnline>
          </CardHeardProductOnline>
          <CardBody
            producto={producto}
          />
        </CardProduct>
      </ContainerProductoOnline>
      :
      <ContainerProductoOnline
        style={{ x, y, rotateX, rotateY, z: 100 }}
      >
        <CardProduct>
          <CardHeardProductOnline>
            <ProductImgProductOnline
              style={{ x, y, rotateX, rotateY, z: 10000 }}
            >
              <img src={producto.imagen} alt="Shoe" />
            </ProductImgProductOnline>
            <BackTextProductOnline>
              FAS
            </BackTextProductOnline>
          </CardHeardProductOnline>
          <CardBody
            producto={producto}
          />
        </CardProduct>
      </ContainerProductoOnline>
    }
    </CardWrapperProductoOnline>
  );
}


export default CardProductOnline;