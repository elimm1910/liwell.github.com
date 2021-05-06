import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar1Style = styled.div`
.logo-container {
  height: 100%;
  width: 150px;
  display: flex;
  align-items: center;
}
a{
  text-decoration:none;
  color: black;
  cursor: 'pointer';
}
a:hover{
  color:grey;
}
@media only screen and (min-width: 624px) {
  .options {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
`;
const Header = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
padding-left: 2%;
padding-right: 2%;
position:fixed;
top:0;
z-index:1000000;
`;

function Navbar1() {
    return (
        <Navbar1Style>
            <Header>
                <Link className='logo-container' to="/">
                    <img style={{ width: '100%' }} src='/livell.png' />
                </Link>
            </Header>
        </Navbar1Style>
    );
}



export default Navbar1;