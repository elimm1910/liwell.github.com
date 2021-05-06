import React from 'react';
import styled from 'styled-components';

const ReproductosStyled = styled.div`
background:black;
position:absolute;
width: 90%;
height: 90%;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
`
const Cerrar = styled.div`
position:absolute;
top:2%;
right:2%;
z-index:10000;
cursor: pointer;
`;

function Reroductor({ video, imagen, handleClose }) {
    return (
        <ReproductosStyled imagen={imagen}>
            <iframe title='Video'
                width="100%" height="100%"
                allowFullScreen autoPlay
                src={video}
            >
            </iframe>
            <Cerrar
                onClick={handleClose}
                className='close'>
                x
             </Cerrar>
        </ReproductosStyled>
    );
}


export default Reroductor;