import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

//componentes
import CardBody from '../../componentesGLB/CardBody';
import SizeSection from '../../componentesGLB/SizeSection';
import ColorSection from '../../componentesGLB/ColorSection';
import BottonAddCart from '../BottonAddCart';

const CardImagenStyled = styled.div`
background:#c9a392;
border-radius: 25px 25px 25px 25px;
`;
const Height = styled.div`
height:60vh;
margin-left:2vw;
margin-right:2vw;
`;
const AlingColumnCardImagen = styled.div`
width:${props => props.width ? props.width : null};
height:100%;
float: ${props => props.left ? "left" : null};
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
`;
const Imagen = styled.img`
width:85%;
height:60vh;
`;
const HeightSmall = styled.div`
height:65vh;
position:relative;
`;
const Title = styled.span`
position:absolute;
top:0;
left:5%;
padding: 20px 20px 5px 20px;
display: block;
font-size: 17px;
font-weight: 500;
letter-spacing: 1px;
text-transform: uppercase;
b {
  font-weight: 900;
  letter-spacing: 0px;
}
`;
const PriceUSD = styled.span`
color: #D10024;
font-size: 18px;
display: inline-block;
position:absolute;
top:0;
right:5%;
padding: 20px 20px 5px 20px;
font-weight: 400;
text-transform: uppercase;
`;
const ImagenSmall = styled.img`
width:90%;
height:60%;
margin:5%;
`;
const SizeWrapperCardImagen = styled.div`
position:absolute;
bottom:25%;
width:100%;
`;
const ColorWrapperCardImagen = styled.div`
position:absolute;
bottom:5%;
width:100%;
`;
const ButtonAdd = styled.div`
position: absolute;
right:5%;
bottom:2%;
`;

function CardImagen({ size }) {
    const producto = useSelector(state => state.producto);

    return (
        <CardImagenStyled>
            {size.width > size.height ?
                <Height>
                    <AlingColumnCardImagen left='true' width='40vw'>
                        <Imagen src={producto.imagen} />
                    </AlingColumnCardImagen>
                    <AlingColumnCardImagen marginLeft='42vw' width='24vw'>
                        <CardBody
                            producto={producto}
                            detail={true}
                        />
                    </AlingColumnCardImagen>
                </Height>
                :
                <HeightSmall>
                    <Title>
                        {producto.name}<b>{producto.name2}</b>
                    </Title>
                    <PriceUSD>
                        USD<b>{producto.price}</b>
                    </PriceUSD>
                    <ImagenSmall src={producto.imagen} />
                    <SizeWrapperCardImagen>
                        <SizeSection
                            size={producto.size}
                        />
                    </SizeWrapperCardImagen>
                    <ColorWrapperCardImagen>
                        <ColorSection
                            color={producto.color}
                        />
                    </ColorWrapperCardImagen>
                    <ButtonAdd>
                        <BottonAddCart
                            producto={producto}
                            detail={true}
                        />
                    </ButtonAdd>
                </HeightSmall>
            }
        </CardImagenStyled>
    );
}

export default CardImagen;