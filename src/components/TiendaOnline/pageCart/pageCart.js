import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MDBIcon } from 'mdbreact';

//componentes
import CartItem from './CartItem';
import StripeCheckoutButton from '../StripeBotton/StripeCheckoutButton';

const PageCartStyled = styled.div`
overflow:auto;
`;
const CheckoutPage = styled.div`
width: 55%;
display: flex;
flex-direction: column;
margin: 15vh auto 0;
@media only screen and (max-width: 700px) {
  width: 70%;
  height: 70vh;
}
@media only screen and (max-width: 500px) {
  width: 90%;
  height: 70vh;
}
`;
const CheckoutHeader = styled.div`
width: 100%;
padding: 10px 0;
display: flex;
border-bottom: 1px solid darkgrey;
`;
const HeaderBlock = styled.div`
text-transform: capitalize;
width: 23%;
.content{
  display:inline;
}
.icon{
  display:none;
}
&:last-child {
  width: 8%;
}
@media only screen and (max-width: 624px) {
  &:first-child {
    width: 23%;
  }
  &:nth-child(2){
    width: 29%;
  }
  &:nth-child(3){
    width: 19%;
  }
  .content{
    display:none;
  }
  .icon{
    display:inline;
  }
}
`;
const Total = styled.div`
margin-top: 30px;
margin-left: auto;
font-size: 36px;
`;
const StripeBotton = styled.div`
width: 160px;
position: fixed;
right: 2%;
bottom: 2%;
`;


function PageCart() {
  const itemsCart = useSelector((state) => state.itemsCart)

  var priceTotal = 0;
  itemsCart.map((item) => {
    priceTotal = priceTotal + parseFloat(item.price) * parseFloat(item.cantidad);
  });

  return (
    <PageCartStyled>
      <CheckoutPage>
        <CheckoutHeader>
          <HeaderBlock>
            <span>
              <div className='content'>Product</div>
              <MDBIcon className='icon' icon='shopping-basket' />
            </span>
          </HeaderBlock>
          <HeaderBlock>
            <span>
              <div className='content'>Description</div>
              <MDBIcon className='icon' icon='shopping-bag' />
            </span>
          </HeaderBlock>
          <HeaderBlock>
            <span>
              <div className='content'>Quantity</div>
              <MDBIcon className='icon' icon='list-ol' />
            </span>
          </HeaderBlock>
          <HeaderBlock>
            <span>
              <div className='content'>Price</div>
              <MDBIcon className='icon' icon='dollar-sign' />
            </span>
          </HeaderBlock>
          <HeaderBlock>
            <span>
              <div className='content'>Remove</div>
              <MDBIcon className='icon' icon='prescription-bottle-alt' />
            </span>
          </HeaderBlock>
        </CheckoutHeader>
        {itemsCart.map((item) =>
          <CartItem
            itemsCart={item}
          />
        )}

        <Total>
          <span>TOTAL: ${priceTotal}</span>
        </Total>
      </CheckoutPage>
      {priceTotal > 0 ?
        <StripeBotton>
          <StripeCheckoutButton price={priceTotal} />
        </StripeBotton>
        : null
      }
    </PageCartStyled>
  );
}


export default PageCart;