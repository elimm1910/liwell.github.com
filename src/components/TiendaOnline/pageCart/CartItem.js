import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { MDBIcon } from 'mdbreact';

const CartItemStyled = styled.div`
  .name,
  .quantity,
  .price {
    width: 23%;
  }
  @media only screen and (max-width: 624px) {
    .name{
      width: 29%;
    }
  .quantity,
  .price {
    width: 19%;
  }
  }
  .quantity {
    display: flex;
     .arrow {
       cursor: pointer;
     }

     .value{
      margin: 0 10px;
       @media only screen and (max-width: 624px) {
        margin: 0 5px;
       }
     }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;
const CheckoutItem = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
`;
const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
img{
  width: 100%;
  height: 100%;
}
`;



function CartItem({ itemsCart }) {

  const dispatch = useDispatch();

  const handleClickDelete = (e) => {
    var idItem = parseInt(e.target.id);
    itemsCart.cantidad = 0;
    dispatch({
      type: "ELIMINAR_ITEMSCART",
      idItem
    })
  };

  const handleClickAdd = () => {
    dispatch({
      type: "AGREGAR_ITEMSCART",
      itemsCart
    })
  };

  const handleClickRest = () => {
    dispatch({
      type: "DISMINUIR_ITEMSCART",
      itemsCart
    })
  };

  return (
    <CartItemStyled>
      <CheckoutItem>
        <ImageContainer>
          <img alt='item' src={itemsCart.imagen} />
        </ImageContainer>
        <span className='name'>{itemsCart.name}</span>
        <span className='quantity'>
          <div onClick={handleClickRest} className='arrow'><MDBIcon icon='angle-left' /></div>
          <span className='value'>{itemsCart.cantidad}</span>
          <div onClick={handleClickAdd} className='arrow'> <MDBIcon icon='angle-right' /></div>
        </span>
        <span className='price'>{itemsCart.price}</span>
        <span id={itemsCart.id} onClick={handleClickDelete} className='remove-button'>&#10005;</span>
      </CheckoutItem>
    </CartItemStyled>
  );
}


export default CartItem;