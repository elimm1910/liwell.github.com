import React from 'react';
import styled from 'styled-components';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const TiendaVirtualStyled = styled(motion.div)`
.separar{
    background: transparent;
    position: relative;
}
.title{
    font-family: 'Lobster', cursive;
    text-align: center;
}
`;
const ImagenWrapper = styled(motion.div)`
position: absolute;
height: 50px;
width: 50px;
overflow: hidden;
`;
const ImagenStyled = styled.img`
  width: 100%;
  height:100%;
`;


const firstName = {
    animate: {
        transition: {
            delayChildren: 2,
            staggerChildren: 3,
            staggerDirection: -1,
            repeat: Infinity,
        }
    }
}

const animate1 = {
    animate: {
        left: ['10%', '40%', '10%'],
        top: ['90%', '105%', '90%'],
        scale: [1, 2, 1],
        zIndex: 10,
        opacity: [0.4, 1, 0.4]
    },
    transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 1, 2],
    }
};
const animate2 = {
    animate: {
        right: ['10%', '40%', '10%'],
        top: ['90%', '105%', '90%'],
        scale: [1, 2, 1],
        zIndex: 10,
        opacity: [0.4, 1, 0.4]
    },
    transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 1, 2],
    }
};
const animate3 = {
    animate: {
        left: ['10%', '40%', '10%'],
        top: ['120%', '105%', '120%'],
        scale: [1, 2, 1],
        zIndex: 10,
        opacity: [0.4, 1, 0.4]
    },
    transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 1, 2],
    }
};
const animate4 = {
    animate: {
        right: ['10%', '40%', '10%'],
        top: ['120%', '105%', '120%'],
        scale: [1, 2, 1],
        zIndex: 10,
        opacity: [0.4, 1, 0.4]
    },
    transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 1, 2],
    }
};

const transition = {
    repeat: Infinity,
    duration: 2,
    repeatDelay: 8
}

function TiendaVirtual({ texto, imagen1, imagen2, imagen3, imagen4, idLista, idSubtema }) {

    return (
        <TiendaVirtualStyled
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <MDBCard reverse className='mt-5 separar'>
                <MDBCardBody className="text-center mb-4">
                    <MDBCardTitle className='title'>Online shop</MDBCardTitle>
                    <p>{texto}</p>
                    <Link to={`${idSubtema}/tienda`} className="btn btn-danger btn-rounded">To visit</Link>
                </MDBCardBody>
                <motion.div
                    variants={firstName}
                >
                    <ImagenWrapper
                        variants={animate1}
                        transition={transition}
                    >
                        <ImagenStyled src={imagen1} />
                    </ImagenWrapper>
                    <ImagenWrapper
                        variants={animate2}
                        transition={transition}
                    >
                        <ImagenStyled src={imagen2} />
                    </ImagenWrapper>
                    <ImagenWrapper
                        variants={animate3}
                        transition={transition}
                    >
                        <ImagenStyled src={imagen3} />
                    </ImagenWrapper>
                    <ImagenWrapper
                        variants={animate4}
                        transition={transition}
                    >
                        <ImagenStyled src={imagen4} />
                    </ImagenWrapper>
                </motion.div>
            </MDBCard>
        </TiendaVirtualStyled>
    );
}


export default TiendaVirtual;