import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const ItemListaStyled = styled.div`
text-align: center;
padding:5%;
.imgItemLista{
    width:100%;
    ${'' /* height:100%; */}
    height:25vh;
    transition: 1s;
    @media only screen and (max-width: 624px) {
        height:10vh;
    }
}
.imgItemLista:hover{
    transform: scale(1.1);
}
`
function ItemLista({ producto }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        console.log('cliked')
        dispatch({
          type: "CAMBIAR_PRODUCTO",
          producto
      })
    }

    return (
        <ItemListaStyled>
            <img onClick={handleClick} src={producto.imagen} className='imgItemLista' />
            <p>{producto.name}</p>
        </ItemListaStyled>
    );
}


export default ItemLista;