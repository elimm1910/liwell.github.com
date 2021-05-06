import React from 'react';
import styled from 'styled-components';

const MenuNavStyled = styled.div`
position: relative;
padding-top: 30px;
padding-bottom: 30px;
`
const MenuTitle = styled.div`
position: relative;
margin-bottom: 30px;
margin-top: 15px;
h3{
  display: inline-block;
  text-transform: uppercase;
  margin: 0px;
  color: #2B2D42;
}
`;
const Menu = styled.div`
float: right;
`;
const MenuTab = styled.ul`
display: inline-block;
.active a {
  color: #D10024;
}
.active a:after {
  width: 100%;
}
li a{
  font-weight: 700 !important;
  color: #8D99AE;
}
`;
const Tab = styled.li`
display: inline-block;
margin-right: 15px;

&:last-child {
  margin-right: 0px;
}

a:after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: #D10024;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

a:hover:after, a:focus:after {
  width: 100%;
}
`;


function MenuNav() {
  return (
    <MenuNavStyled>
      <MenuTitle className='container'>
        <h3>New Products</h3>
        <Menu>
          <MenuTab>
            <Tab className="active"><a data-toggle="tab" href="#tab1">Laptops</a></Tab>
            <Tab><a data-toggle="tab" href="#tab1">Smartphones</a></Tab>
            <Tab><a data-toggle="tab" href="#tab1">Cameras</a></Tab>
          </MenuTab>
        </Menu>
      </MenuTitle>
    </MenuNavStyled>
  );
}


export default MenuNav;