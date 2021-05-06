import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const HotSectionStyled = styled.div`
padding: 60px 0px;
margin: 30px 0px;
background-color: #E4E7ED;
background-image: url(${props => props.image});
background-size: cover;
background-position: center;
background-attachment: contain;
text-align: center;

h2{
  color: #2B2D42;
}
p {
  text-transform: uppercase;
  font-size: 24px;
  color: #2B2D42;
}
`;
const HotDeal = styled.div`
position: relative;
display: inline-block;
width: 100px;
height: 100px;
background: #D10024e6;
text-align: center;
border-radius: 50%;
margin: 0px 5px;

@media only screen and (max-width: 624px) {
  width: 70px;
  height: 70px;
}
`;
const HotDealItem = styled.div`
position: absolute;
left: 0;
right: 0;
top: 50%;
-webkit-transform: translateY(-50%);
-ms-transform: translateY(-50%);
transform: translateY(-50%);

h3 {
  color: #FFF;
  margin-bottom: 0px;
}

span {
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  color: #FFF;
}
`;
const Button = styled.div`
margin-top: 15px;
display: inline-block;
padding: 12px 30px;
background-color: #D10024;
border: none;
border-radius: 40px;
color: #FFF;
text-transform: uppercase;
font-weight: 700;
text-align: center;
-webkit-transition: 0.2s all;
transition: 0.2s all;
cursor:pointer;

&:hover, &:focus {
  opacity: 0.9;
  color: #FFF;
}
`;

function HotSection({image, collection}) {
  const dispatch = useDispatch();
    const handleClick = () => {
        var producto = collection.productos[0];
        dispatch({
            type: "CAMBIAR_PRODUCTO",
            producto
        });
    }
  return (
    <HotSectionStyled image={image}>
      <div>
        <HotDeal>
          <HotDealItem>
            <h3>02</h3>
            <span>Days</span>
          </HotDealItem>
        </HotDeal>
        <HotDeal>
          <HotDealItem>
            <h3>10</h3>
            <span>Hours</span>
          </HotDealItem>
        </HotDeal>
        <HotDeal>
          <HotDealItem>
            <h3>34</h3>
            <span>Mins</span>
          </HotDealItem>
        </HotDeal>
        <HotDeal>
          <HotDealItem>
            <h3>60</h3>
            <span>Secs</span>
          </HotDealItem>
        </HotDeal>
      </div>
      <h2 className="text-uppercase">hot deal this week</h2>
      <p>New Collection Up to 50% OFF</p>
      <Link to={`tienda/detalles/0`} onClick={handleClick}>
      <Button>Shop now</Button>
      </Link>
    </HotSectionStyled>
  );
}


export default HotSection;