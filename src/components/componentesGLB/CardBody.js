import React from 'react';
import styled from 'styled-components';

//components
import BottonAddCart from '../TiendaOnline/BottonAddCart';
import SizeSection from './SizeSection';
import ColorSection from './ColorSection';

const CardBodyStyled = styled.div`
* {
  margin: 0;
  padding: 0;
  outline: none;
}
`;
const Body = styled.div`
background: #fff;
border-radius:${props => props.detail ? '25px 25px 25px 25px' : '0 0 25px 25px'};
height:${props => props.detail ? '210px' : '240px'};

@media only screen and (max-width: 850px) {
  height:${props => props.detail ? '250px' : '240px'};
}
`;
const ProductTitle = styled.div`
padding: 20px 20px 5px 20px;
display: block;
font-size: 17px;
font-weight: 500;
letter-spacing: 1px;
text-transform: uppercase;
b {
  font-weight: 900;
  letter-spacing: 0px;
  margin-left: 5px;
}
`;
const ProductPrice = styled.div`
display: block;
padding: 0 20px;
font-weight: 400;
text-transform: uppercase;
color: #D10024;
font-size: 18px;
b {
  margin-left: 5px;
}
`;
const ProductButton = styled.div`
position: absolute;
display: inline-block;
margin-top: -13px;

@media only screen and (max-width: 850px) {
  position:${props => props.detail ? 'relative' : null};
  padding-left:${props => props.detail ? '20px' : null};
  margin-top:${props => props.detail ? '5px' : null};
}
@media only screen and (max-width: 700px) {
  margin-top:${props => !props.detail ? '-8px' : null};
}
@media only screen and (max-width: 650px) {
  margin-top:${props => !props.detail ? '-5px' : null};
}
`;


function CardBody({ producto, detail }) {
  return (
    <CardBodyStyled>
      <Body detail={detail}>
        <ProductTitle>
          {producto.name}<b>{producto.name2}</b>
        </ProductTitle>
        <ProductPrice>
          USD<b>{producto.price}</b>
        </ProductPrice>
        <SizeSection
          size={producto.size}
        />
        <ColorSection
          color={producto.color}
        />
        <ProductButton detail={detail}>
          <BottonAddCart
            producto={producto}
            detail={detail}
          />
        </ProductButton>
      </Body>
    </CardBodyStyled>
  );
}


export default CardBody;

















// import React from 'react';
// import styled from 'styled-components';

// //components
// import BottonAddCart from '../TiendaOnline/BottonAddCart';
// import SizeSection from './SizeSection';
// import ColorSection from './ColorSection';

// const CardBodyStyled = styled.div`
// * {
//   margin: 0;
//   padding: 0;
//   outline: none;
// }

// .card-body {
//   height: 240px;
//   background: #fff;
//   border-radius: 0 0 25px 25px;
// }

// .product-title {
//   padding: 20px 20px 5px 20px;
//   display: block;
//   font-size: 17px;
//   font-weight: 500;
//   letter-spacing: 1px;
//   text-transform: uppercase;
// }

// .product-title b {
//   font-weight: 900;
//   letter-spacing: 0px;
// }

// .badge {
//   position: relative;
//   font-size: 10px;
//   font-weight: 300;
//   color: #fff;
//   background: rgb(216, 46, 46);
//   padding: 2px 5px;
//   border-radius: 4px;
//   top: -2px;
//   margin-left: 5px;
// }

// .product-caption {
//   display: block;
//   padding: 0 20px;
//   font-size: 10px;
//   font-weight: 400;
//   text-transform: uppercase;
// }

// .product-price-usd {
//   color: #D10024;
//   font-size: 18px;
// }

// .product-price {
//   position: absolute;
//   display: inline-block;
//   margin-top: -13px;
// }

// b {
//   margin-left: 5px;
// }
// `
// function CardBody({ producto }) {
//     return (
//         <CardBodyStyled>
//             <div className="card-body">
//                 <div className="product-desc">
//                     <span className="product-title">
//                         {producto.name}<b>{producto.name2}</b>
//                     </span>
//                     <span className="product-price-usd product-caption">
//                         USD<b>{producto.price}</b>
//                     </span>
//                 </div>
//                 <div className="product-properties">
//                     <SizeSection
//                         size={producto.size}
//                     />
//                     <ColorSection
//                         color={producto.color}
//                     />
//                     <span className="product-price">
//                         <BottonAddCart
//                             producto={producto}
//                         />
//                     </span>
//                 </div>
//             </div>
//         </CardBodyStyled>
//     );
// }


// export default CardBody;