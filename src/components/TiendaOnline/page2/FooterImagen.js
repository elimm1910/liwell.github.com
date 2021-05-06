import React from 'react';
import styled from 'styled-components';

//componentes
import ItemFooter from './ItemFooter';

const FooterImagenStyled = styled.div`
width:100%;
background:#c9a392;
border-radius: 25px 25px 25px 25px;
`;
const AlingColumnFooter = styled.div`
width:${props => props.width ? props.width : null};
height:100%;
float: ${props => props.left ? "left" : null};
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
`;


function FooterImagen() {

    return (
        <FooterImagenStyled>
            <AlingColumnFooter left='true' width='34vw'>
                <ItemFooter
                    icon="car-side"
                    title='SHIPPING TO HOME'
                    texto='Configure options to receive delivery'
                />
            </AlingColumnFooter>
            <AlingColumnFooter marginLeft='36vw' width='34vw'>
                <ItemFooter
                    icon="hand-holding-usd"
                    title='PAYMENT METHODS'
                    texto='All the information you may need'
                />
            </AlingColumnFooter>
        </FooterImagenStyled>
    );
}


export default FooterImagen;