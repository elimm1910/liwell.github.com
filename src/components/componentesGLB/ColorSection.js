import React, { useState } from 'react';
import styled from 'styled-components';

const ColorSectionStyled = styled.div`
margin-left: 20px !important;
margin-top: 15px !important;
h4 {
  font-size: 11px;
  padding-bottom: 5px;
  text-transform: uppercase;
}
.active:after {
  position: absolute;
  content: '';
  display: inline-block;
  border: 1px solid rgb(216, 46, 46);
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin-left: -4px;
  margin-top: -4px;
}
`;
const UlColor = styled.div`
margin-left: 6px;
li {
  list-style: none;
  float: left;
  margin-right: 20px;
  cursor: pointer;
}
`;
const ColorStyled = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: ${props => props.color};
`;

function ColorSection({ color }) {

  const [idActive, setIdActive] = useState(0);

  const handleClick = (e) => {
    let id = parseInt(e.target.attributes.id.value, 10);
    setIdActive(id);
  }

  return (
    <ColorSectionStyled>
      <h4>Colour</h4>
      <UlColor>
        {color.map((color) =>
          <li key={color.id}>
            <ColorStyled
              key={color.id}
              id={color.id}
              onClick={handleClick}
              className={color.id === idActive ? 'active' : null}
              color={color.valor}>
            </ColorStyled>
          </li>
        )}
      </UlColor>
    </ColorSectionStyled>
  );
}


export default ColorSection;