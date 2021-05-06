import React from 'react';
import styled from 'styled-components';
import { MDBRow, MDBCol } from 'mdbreact';

//componentes
import TopSellingCard from './TopSellingCard';

const TopSellingStyled = styled.div`
margin-top:5%;
`
function TopSelling({ lista, idLista }) {
    return (
        <TopSellingStyled className='container'>
            <MDBRow className='mb-2'>
                {lista[idLista].subtema.map((tema) =>
                    <MDBCol md="4" key={tema.id}>
                        <TopSellingCard
                            tema={tema}
                        />
                    </MDBCol>
                )}
            </MDBRow>
        </TopSellingStyled>
    );
}


export default TopSelling;