import React from 'react';
import styled from 'styled-components';

const BarrasStyled = styled.div`
top:45%;
position:fixed;
right:0;
`
const ContainerBarras = styled.div`
position:relative;
`;
const SelectedBarras = styled.div`
-moz-border-radius:50%;
-webkit-border-radius: 50%;
border-radius: 50%;
z-index: -1;
width:10px;
height:10px;
position:relative;
text-align:center;
transition: 1s;
background: ${props => props.orden === props.number ? 'black' : 'rgba(150, 147, 147)'};
`;

function Barras({orden}) {
  let index = [0, 1, 2, 3];
    return (
        <BarrasStyled>
        <ContainerBarras>
        {index.map((inde) => 
          <SelectedBarras key={inde} orden={orden} number={inde} className='m-4' />
        )}
        </ContainerBarras>
        </BarrasStyled>
    );
}

export default Barras;