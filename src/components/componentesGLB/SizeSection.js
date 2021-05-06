import React, { useState } from 'react';
import styled from 'styled-components';

const SizeSectionStyled = styled.div`
margin-left: 20px !important;
margin-top: 15px !important;
h4 {
  font-size: 11px;
  text-transform: uppercase;
}
&:before, &:after {
  content: '';
  display: block;
  clear: both;
}
`;
const UlSize = styled.div`
li {
  list-style: none;
  float: left;
  margin-right: 5%;
  cursor:pointer;
}
li div {
  display: inline-block;
  text-decoration: none;
  font-size: 11px;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  text-align: center;
  line-height: 22px;
  color: #000;
}
li div.active {
  background: rgb(216, 46, 46);
  color: #fff;
}
`;


function SizeSection({ size }) {

  const [idActive, setIdActive] = useState(0);

  const handleClick = (e) => {
    let id = parseInt(e.target.attributes.id.value, 10);
    setIdActive(id);
  }

  return (
    <SizeSectionStyled>
      <h4>Size</h4>
      <UlSize>
        {size.map((size) =>
          <li key={size.id}>
            <div
              key={size.id}
              id={size.id}
              className={size.id === idActive ? 'active' : null}
              onClick={handleClick}>{size.valor}
            </div>
          </li>
        )}
      </UlSize>
    </SizeSectionStyled>
  );
}


export default SizeSection;