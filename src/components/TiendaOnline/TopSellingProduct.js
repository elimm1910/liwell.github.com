import React from 'react';
import styled from 'styled-components';

const TopSellingProductStyled = styled.div`
a:hover, a:focus {
  color: #D10024;
}
`;
const ProductWidget = styled.div`
position: relative;
&+& {
  margin: 30px 0px;
}
`;
const ProductImg = styled.div`
position: absolute;
left: 0px;
top: 0px;
width: 60px;
img {
  width: 100%;
}
`;
const ProductBody = styled.div`
padding-left: 75px;
min-height: 60px;

p {
  text-transform: uppercase;
  font-size: 10px;
  color: #8D99AE;
}

h3 {
  text-transform: uppercase;
  font-size: 12px;
}

h3 a {
  font-weight: 700;
  color: #2B2D42;
}

h4 {
  font-size: 14px;
  color: #D10024;
}

h4 p {
  font-size: 70%;
  font-weight: 400;
  color: #8D99AE;
}
`;


function TopSellingProduct({ imagen, name, price }) {
  return (
    <TopSellingProductStyled>
      <ProductWidget>
        <ProductImg>
          <img src={imagen} alt="" />
        </ProductImg>
        <ProductBody>
          <p>Category</p>
          <h3><a href="#">{name}</a></h3>
          <h4>${price} <p>$450.00</p></h4>
        </ProductBody>
      </ProductWidget>
    </TopSellingProductStyled>
  );
}


export default TopSellingProduct;