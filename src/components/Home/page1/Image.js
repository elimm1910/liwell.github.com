import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ImagePortafolioWrapeer = styled(motion.div)`
width: ${props => props.width ? `${props.width}px` : null};
height: ${props => props.height ? `${props.height}px` : null};
position:${props => props.position ? props.position : 'absolute'};
text-align: center;
`;
const ImageMotionPortaolio = styled(motion.div)`
background: rgb(216, 46, 46);
width: ${props => props.width ? `${props.width}px` : null};
height: ${props => props.height ? `${props.height}px` : null};
position: relative;
overflow: hidden;
`;
const ImgMotion = styled(motion.img)`
width: ${props => props.width ? `${props.width}px` : '100%'};
scale: ${props => props.scale ? props.scale : null};
height: 100%;
`;

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const transition2 = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Image = ({ lista, orden, size, clase, localizacion }) => {
    const [tamanoLocalizacion, setTamanoLocalizacion] = useState(localizacion.length);

    let width = 0;
    let height = 0;
    let x = 0;
    let y = 0;
    let tamanoLocalizacionDelay = null;
    let direction = null;

    useEffect(() => {
        if (tamanoLocalizacion === 2) {
            tamanoLocalizacionDelay = setTimeout(() => {
                setTamanoLocalizacion(1)
            }, 1400);
        } else {
            setTamanoLocalizacion(1)
        }
        return () => {
            clearTimeout(tamanoLocalizacionDelay);
        }
    }, [])


    if (size.width > size.height) {
        width = size.width * 0.5;
        height = size.height * 0.7;
        x = '-37%';
        y = '0%';
    } else {
        width = size.width * 0.7;
        height = size.height * 0.5;
        x = '-12%';
        y = '-45%';
    }

    if (clase === 'Arriba') {
        direction = -1;
    } else {
        direction = 1;
    }

    const variants = {
        enter: (direction) => {
            return {
                y: direction > 0 ? 1000 : -1000,
                scale: 1.5,
            };
        },
        center: {
            y: 0,
            scale: 1,
        },
        exit: (direction) => {
            return {
                y: direction < 0 ? 1000 : -1000,
                scale: 0.5,
            };
        }
    };


    if (tamanoLocalizacion === 2) {
        return (
            <ImageMotionPortaolio
                width={width}
                height={height}
                initial={{
                    x: x,
                    y: y,
                    width: '100vw',
                    height: '100vh',
                    opacity: 0.3,
                }}
                animate={{
                    x: '0',
                    y: '0',
                    width: width,
                    height: height,
                    transition: { transition2 },
                    opacity: 1,
                }}
            >
                <Link to={`/${lista[orden].id}`}>
                    <ImgMotion
                        src={lista[orden].url}
                        alt='imagen'
                        whileHover={{ scale: 1.1 }}
                        transition={transition2}
                    />
                </Link>
            </ImageMotionPortaolio>
        );
    } else {
        return (
            <AnimatePresence initial={false} custom={direction}>
                {lista[orden].id === 0 ?
                    <ImagePortafolioWrapeer
                        width={width}
                        height={height}
                        key={orden}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={transition}
                    >
                        <ImgMotion src='fondo1.png' scale='1.25' width={size.width<size.height ? width : height} />
                    </ImagePortafolioWrapeer>
                    :
                    <ImagePortafolioWrapeer
                        position={tamanoLocalizacion === 2 ? 'relative' : 'absolute'}
                        width={width}
                        height={height}
                        key={orden}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={transition}
                    >
                        <ImageMotionPortaolio
                            width={width}
                            height={height}
                        >
                            <Link to={`/${lista[orden].id}`}>
                                <ImgMotion
                                    src={lista[orden].url}
                                    key={lista[orden].url}
                                    initial={{
                                        x: '-100%',
                                        y: '0%',
                                    }}
                                    animate={{
                                        x: '0',
                                        y: '0',
                                    }}
                                    alt='imagen'
                                    whileHover={{ scale: 1.1 }}
                                    transition={transition2}
                                />
                            </Link>
                        </ImageMotionPortaolio>
                    </ImagePortafolioWrapeer>
                }
            </AnimatePresence>
        );
    }
};


export default Image;