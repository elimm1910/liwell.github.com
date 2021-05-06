import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//component
import StripeCheckoutButton from './StripeBotton/StripeCheckoutButton';

const ProductCardStyled = styled.div`
position: fixed;
width: 300px;
background: #FFF;
padding: 15px;
-webkit-box-shadow: 0px 0px 0px 2px #E4E7ED;
box-shadow: 0px 0px 0px 2px #E4E7ED;
z-index: 9900000;
top:9%;
right: 7%;
overflow:hidden;
`;
const CartList = styled.div`
max-height: 180px;
overflow-y: scroll;
margin-bottom: 15px;
`;
const ProductWidget = styled.div`
padding: 0px;
-webkit-box-shadow: none;
box-shadow: none;
position: relative;

&:last-child {
  margin-bottom: 0px;
}

&+& {
  margin: 30px 0px;
}
`;
const ProductImg = styled.div`
position: absolute;
width: 60px;
left: 0px;
top: 0px;

img {
  width: 100%;
}
`;
const ProductBody = styled.div`
padding-left: 75px;
min-height: 60px;
`;
const ProductName = styled.h3`
text-transform: uppercase;
font-size: 12px;

a {
  font-weight: 700;
}

a:hover, a:focus {
  color: #D10024;
}
`;
const ProductPrice = styled.h4`
font-size: 14px;
color: #D10024;
span {
  font-weight: 400;
  margin-right: 10px;
  color: #2B2D42;
}
`;
const ButtonDeleted = styled.button`
position: absolute;
top: 0;
right: 10%;
height: 14px;
width: 14px;
text-align: center;
font-size: 12px;
font-weight:800;
padding: 0;
border: none;
background:transparent;

&:hover {
  opacity: 0.5;
}
`;
const CartSummary = styled.div`
border-top: 1px solid #E4E7ED;
padding-top: 15px;
padding-bottom: 15px;
`;
const CartBtns = styled.div`
margin: 0px -17px -17px;
display:flex;
justify-content: center;
.button {
  margin-left:0 !important;
  display: inline-block;
  width: calc(45% - 0px);
  padding: 12px;
  margin-right: -4px;
  background-color: #1e1f29;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}
`;


const ProductCard = ({ toggleOpen }) => {
  const itemsCart = useSelector(state => state.itemsCart);
  const dispatch = useDispatch();

  const handleClickEliminarItem = (e) => {
    var idItem = parseInt(e.target.id);
    itemsCart.map((item) => {
      if(item.id === idItem){
        item.cantidad = 0;
      }
    })
    dispatch({
      type: "ELIMINAR_ITEMSCART",
      idItem
    })
  }

  var priceTotal = 0;
  itemsCart.map((item) => {
    priceTotal = priceTotal + parseFloat(item.price) * parseFloat(item.cantidad);
  })


  return (
    <ProductCardStyled>
      <CartList>
        {itemsCart.map((item) =>
          <ProductWidget key={item.id}>
            <ProductImg>
              <img src={item.imagen} alt="" />
            </ProductImg>
            <ProductBody>
              <ProductName><a href="#">{item.name}</a></ProductName>
              <ProductPrice><span>{`${item.cantidad}x`}</span>{`$${item.price}`}</ProductPrice>
            </ProductBody>
            <ButtonDeleted id={item.id} item={item} onClick={handleClickEliminarItem}>X</ButtonDeleted>
          </ProductWidget>
        )}
      </CartList>
      <CartSummary>
        <small>{itemsCart.length > 1 ? `${itemsCart.length} Items selected` : `${itemsCart.length} Item selected`}</small>
        <h5>{`SUBTOTAL: $${priceTotal}`}</h5>
      </CartSummary>
      <CartBtns>
        <Link to={`/tienda/cart`} onClick={() => toggleOpen()} className="btn button">View Cart</Link>
        <StripeCheckoutButton price={priceTotal} />
      </CartBtns>
    </ProductCardStyled>
  )
}

export default ProductCard;