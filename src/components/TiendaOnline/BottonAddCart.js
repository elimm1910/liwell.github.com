import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const BottonAddCartStyled = styled.div`
button{
-webkit-transition: 0.2s all;
transition: 0.2s all;
background: rgb(216, 46, 46);
padding: 7px 20px;
text-align: center;
font-size: 2vw;
font-weight: 200;
color: #fff;
border-radius: 7px;
}

button:hover{
  box-shadow: -10px 20px 15px -10px rgb(143, 4, 4, .3);
}
b {
  margin-left: 5px;
}

@media only screen and (max-width: 900px) {
  button{
    font-size:${props => !props.detail ? '2.5vw' : null};
  }
}
@media only screen and (max-width: 650px) {
  button{
    font-size:${props => !props.detail ? '3vw' : null};
  }
}
@media only screen and (max-width: 600px) {
  button{
    font-size:${props => props.detail ? '4vw' : null};
  }
}
`;

function BottonAddCart({ producto, detail }) {

  const dispatch = useDispatch();
  const handleClick = () => {
    var itemsCart = producto;
    if (!itemsCart.cantidad) {
      itemsCart.cantidad = 0;
    };
    console.log(itemsCart);
    dispatch({
      type: "AGREGAR_ITEMSCART",
      itemsCart
    })
  }
  return (
    <BottonAddCartStyled detail={detail}>
      <button onClick={handleClick} className="btn btn-rounded">
        Add<b>Cart</b>
      </button>
    </BottonAddCartStyled>
  );
}


export default BottonAddCart;