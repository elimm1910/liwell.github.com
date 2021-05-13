import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//componentes
import Card from '../TiendaOnline/Card';
import HederSearch from '../TiendaOnline/HeaderSearch';

const Navbar2Style = styled.div`
  .logo-container {
      height: 100%;
      width: 150px;
      display: flex;
      align-items: center;
    }
    .options {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }
  a{
      text-decoration:none;
      color: black;
      cursor: 'pointer';
  }
  a:hover{
      color:grey;
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
background:#c9a392;
`;


function Navbar2() {
    return (
        <Navbar2Style>
            <Header>
                <Link className='logo-container' to="/">
                    <img style={{ width: '100%' }} src='/livell.png' alt='' />
                </Link>
                <div className='mx-auto'>
                    <HederSearch />
                </div>
                <div className='options'>
                    <Card />
                </div>
            </Header>
        </Navbar2Style>
    );
}



export default Navbar2;