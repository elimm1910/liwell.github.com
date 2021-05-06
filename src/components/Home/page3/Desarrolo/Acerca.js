import React from 'react';
import styled from 'styled-components';
import { MDBRow, MDBCol } from 'mdbreact';

//componentes
import CardVertical from './CardVertical';
import CardVerticalInvertida from './CardVerticalInvertida';

const AcercaStyled = styled.div`
.positionColum1{
    padding-left:0 !important;
}
.positionColum2{
    padding-right:0 !important;
}
.positionColum{
    padding-left:0 !important;
    padding-right:0 !important;
}
`

function Acerca({lista, idLista, idSubtema, size}) {
    var class1, class2 = 'positionColum2';
    {size.width>size.height ? class1='positionColum1' : size.width<size.height && size.width>700  ? class1='positionColum1' : class1= class2='positionColum'}
    return (
        <AcercaStyled>
            <MDBRow className='mx-auto mt-5'>
                <MDBCol md="6" lg="6" className={class1}>
                    <CardVertical
                        title={lista[idLista].subtema[idSubtema].informacion1.title}
                        texto={lista[idLista].subtema[idSubtema].informacion1.texto}
                        imagen={lista[idLista].subtema[idSubtema].informacion1.imagen}
                    />
                </MDBCol>
                <MDBCol md="6" lg="6" className={class2}>
                    <CardVerticalInvertida
                        title={lista[idLista].subtema[idSubtema].informacion2.title}
                        texto={lista[idLista].subtema[idSubtema].informacion2.texto}
                        imagen={lista[idLista].subtema[idSubtema].informacion2.imagen}
                    />
                </MDBCol>
            </MDBRow>
        </AcercaStyled>
    );
}


export default Acerca;