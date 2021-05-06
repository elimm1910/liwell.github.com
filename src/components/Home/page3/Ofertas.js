import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

//componentes
import Desarrollo from './Desarrolo/Desarrollo';
import Anuncios from './Anuncios/Anuncios';

function Ofertas({ lista, idLista, idSubtema, size }) {
    return (
        <MDBRow className='mx-auto'>
            <MDBCol md="9" lg="9">
                <Desarrollo
                    lista={lista}
                    idLista={idLista}
                    idSubtema={idSubtema}
                    size={size}
                />
            </MDBCol>
            <MDBCol md="3" lg="3">
                <Anuncios
                    lista={lista}
                    idLista={idLista}
                    idSubtema={idSubtema}
                    size={size}
                />
            </MDBCol>
        </MDBRow>
    );
}


export default Ofertas;