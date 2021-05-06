import React from 'react';
import styled from 'styled-components';
import { MDBBtnGroup, MDBIcon } from 'mdbreact';

const SearchStyled = styled.div`
padding: 15px 0px;

@media only screen and (max-width: 624px) {
  width: 130px;
}
`;
const Form = styled.form`
position: relative;
`;
const Input = styled.input`
height: 40px;
padding: 0px 15px;
border: 1px solid #E4E7ED;
background-color: #FFF;
width: calc(100%);
margin-right: -4px;
border-radius: 40px 0px 0px 40px;
`;
const BottonStyled = styled.button`
  height: 40px;
  width: 100px;
  background: #D10024;
  color: #FFF;
  font-weight: 600;
  border: none;
  border-radius: 0px 40px 40px 0px;
  :after{
    content:"SEARCH";
  }
  .icon{
    display:none;
  }
  @media only screen and (max-width: 624px) {
    width: auto;
    :after{
    content:"";
  }
  .icon{
    display:inline;
  }
  }
`;

const SearchBar = () => {
  return (
    <SearchStyled>
        <Form>
          <MDBBtnGroup>
                <Input className="input" placeholder='Seach...' aria-label='Search...' type='text'/>
                <BottonStyled className="btn btn-rounded">
                  <MDBIcon className='icon' icon='search'/>
                </BottonStyled>
          </MDBBtnGroup>
        </Form>
    </SearchStyled>
  )
}

export default SearchBar;