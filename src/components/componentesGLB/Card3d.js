import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
width: 100%;
perspective: 200;
display:flex;
aling-items: center;
justify-content: center;
`;
const ContainerStyled = styled(motion.div)`
width:100%;
max-width: 285px;
height:400px;
display:flex;
flex-direction:column;
border-radius: 25px;
box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
background-color: white;
color: red;
position: relative;
cursor: grab;
`;
const TopContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
flex:1.8;
position:relative;
aling-items:center;
justify-content: flex-end;
padding: 1em 15px;
`;
const CircleWrapper = styled.div`
position:absolute;
top: 0;
left:0;
min-width:100%;
min-height:100%;
overflow:hidden;
border-top-right-radius:25px;
`;
const Circle = styled.div`
position: absolute;
width:350px;
height:350px;
top: -4.2em;
right: -10em;
z-index: 5;
background-color: rgb(216, 46, 46);
border-radius: 50%;
`;
const BottonContainer = styled.div`
display:flex;
flex:0.2;
padding: 0 1em;
p{
    font-weight:600;
    cursor:pointer;
    width:100px;
    color: #2B2D42;
}
p:hover, p:focus {
  color: #D10024;
}
`;
const TitleWrapper = styled.div`
overflow:hidden;
`;
const Title = styled.h1`
color: #2B2D42;
text-transform:uppercase;
margin: 0;
z-index:10;
font-size:50px;
font-weight: 900;
`;
const ImageWrapper = styled.div`
width:100%;
height:100%;
position:absolute;
display:flex;
aling-items:center;
justify-content:center;
`;
const Imagen = styled(motion.div)`
width:100%;
height:290px;
z-index:99;
user-select:none;
img{
    width:100%;
    height:100%;
    user-select:none;
}
`;

function Card3d({ collections }) {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const dispatch = useDispatch();
    const handleClick = () => {
        var producto = collections.productos[0];
        dispatch({
            type: "CAMBIAR_PRODUCTO",
            producto
        });
    }

    return (
        <CardWrapper>
            <ContainerStyled
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                <TopContainer>
                    <CircleWrapper>
                        <Circle />
                    </CircleWrapper>
                    <ImageWrapper>
                        <Imagen
                            style={{ x, y, rotateX, rotateY, z: 10000 }}
                            drag
                            dragElastic={0.12}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <img src={collections.imagen} />
                        </Imagen>
                    </ImageWrapper>
                    <TitleWrapper>
                        <Title>{collections.name}</Title>
                    </TitleWrapper>
                </TopContainer>
                <BottonContainer>
                    <Link to={`tienda/detalles/${collections.id}`} onClick={handleClick}>
                        <p>Shop now <i className="fa fa-arrow-circle-right"></i></p>
                    </Link>
                </BottonContainer>
            </ContainerStyled>
        </CardWrapper>
    );
}


export default Card3d;