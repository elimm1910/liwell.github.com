import React from 'react';
import styled from 'styled-components';

//componentes
import SliderNewProducts from './SliderNewProducts';
import MenuNav from './MenuNav';

const NuevosProductosStyled = styled.div`
margin-top: 5%;
margin-bottom: 5%;
`

function NuevosProductos({ lista, idLista, idSubtema }) {
    return (
        <NuevosProductosStyled>
            <MenuNav/>
            <SliderNewProducts
                lista={lista}
                idLista={idLista}
                idSubtema={idSubtema}
            />
        </NuevosProductosStyled>
    );
}


export default NuevosProductos;