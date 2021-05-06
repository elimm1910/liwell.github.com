import React from 'react';
import styled from 'styled-components';
import { MDBFormInline, MDBIcon } from 'mdbreact';

const SearchStyled = styled.div`
.formInline{
  width:40%;
}
.inpu{
  width:85%;
}
`

const SearchBar = ({ keyword, setKeyword }) => {
    return (
        <SearchStyled>
            <MDBFormInline className='md-form formInline mx-auto'>
                <input
                    className='form-control inpu'
                    value={keyword}
                    onChange={setKeyword}
                    type='text'
                    placeholder='Seach...'
                    aria-label='Search...' />
                <MDBIcon icon='search' />
            </MDBFormInline>
        </SearchStyled>
    )
}

export default SearchBar;