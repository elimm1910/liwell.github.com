import React from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';

const StripeCheckoutButtonStyle = styled.div`
button{
  display: inline-block;
  width: calc(95% - 0px);
  padding: 12px;
  background-color: #D10024;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}
button:hover{
    opacity: 0.9;
    color: #FFF;
}
`

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51INfBPD4MYo9OQLu01PNsT7KjX5IUcReaX0AOK6Zefy7WqdO4FaApWSFORuVOwCO4WS7DkX2fdJjjyF6Alo4cDHi00OSEyiGq3';

    const dispatch = useDispatch()
    const onToken = token => {
        console.log(token);
        alert('Pyment Successful');
        var idItem = null;
        var card = null;
        dispatch({
            type: "ELIMINAR_ITEMSCART",
            idItem
        });
        dispatch({
            type: "CAMBIAR_CARD",
            card
        });
    }

    return (
        <StripeCheckoutButtonStyle>
        {StripeCheckout ?
            <StripeCheckout
            label='Pay Now'
            name='Livell'
            billingAddress
            shippingAddress
            image='/logo.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey }
        >
          <button className='btn'>Checkout  <i className="fa fa-arrow-circle-right"></i></button>
        </StripeCheckout>
        :
        <button className='btn'>Checkout  <i className="fa fa-arrow-circle-right"></i></button>
        }
        </StripeCheckoutButtonStyle>
    )
};

export default StripeCheckoutButton;