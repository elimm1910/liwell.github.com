import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

//components
import Titulo from './Titulo';
import Image from './Image';

const PortafolioStyled = styled.div`
color:black;
`;
const HeightStyled = styled.div`
height:100vh;
overflow:hidden;
position:relative;
`;
const MarginStyled = styled.div`
margin-left: 12vw;
margin-top: ${props => props.marginTop ? props.marginTop : 0};
height:100%;
`;
const WrapperPortafolio = styled.div`
margin-right: 0px !important;
height:100%;
`;
const CentrarColumna = styled.div`
height:100%;
float: ${props => props.left ? "left" : null};
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
`;


function Portafolio({ lista, orden, size, clase, localizacion }) {
    const dispatch = useDispatch();

    const scrollAbajo = (orden) => {
        dispatch({
            type: "SCROLL_ABAJO",
            orden
        })
    }
    const scrollArriba = (orden) => {
        dispatch({
            type: "SCROLL_ARRIBA",
            orden
        })
    }

    const nextIndex = () => {
        if (orden === lista.length - 1) {
            let neworden = 0;
            return scrollAbajo(neworden);
        }
        let neworden = orden + 1;
        return scrollAbajo(neworden);
    };
    const prevIndex = () => {
        if (orden === 0) {
            let neworden = lista.length - 1;
            return scrollArriba(neworden);
        }
        let neworden = orden - 1;
        return scrollArriba(neworden);
    };

    return (
        <PortafolioStyled>
            <ReactScrollWheelHandler
                upHandler={prevIndex}
                downHandler={nextIndex}
            >
                <HeightStyled>
                    {size.width > size.height ?
                        <WrapperPortafolio>
                            <CentrarColumna left="true" marginLeft="2vw">
                                <Titulo
                                    orden={orden}
                                    titulo1={lista[orden].title1}
                                    titulo2={lista[orden].title2}
                                    p1={lista[orden].p1}
                                    p2={lista[orden].p2}
                                    boton={lista[orden].boton}
                                    size={size}
                                />
                            </CentrarColumna>
                            <CentrarColumna marginLeft="35vw" >
                                <Image
                                    lista={lista}
                                    orden={orden}
                                    size={size}
                                    clase={clase}
                                    localizacion={localizacion}
                                />
                            </CentrarColumna>
                        </WrapperPortafolio>
                        :
                        <div>
                            <WrapperPortafolio>
                                <MarginStyled marginTop="15vh">
                                    <Titulo
                                        orden={orden}
                                        titulo1={lista[orden].title1}
                                        titulo2={lista[orden].title2}
                                        p1={lista[orden].p1}
                                        p2={lista[orden].p2}
                                        boton={lista[orden].boton}
                                        size={size}
                                    />
                                </MarginStyled>

                                <MarginStyled>
                                    <Image
                                        lista={lista}
                                        orden={orden}
                                        size={size}
                                        clase={clase}
                                        localizacion={localizacion}
                                    />
                                </MarginStyled>
                            </WrapperPortafolio>
                        </div>
                    }
                </HeightStyled>
            </ReactScrollWheelHandler>
        </PortafolioStyled>
    );
}

export default Portafolio;