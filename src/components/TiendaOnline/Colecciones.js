import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

//componentes
import Card3d from '../componentesGLB/Card3d';

function Colecciones({ lista, idLista, idSubtema }) {
    return (
        <div className='container'>
            <MDBRow>
                {lista[idLista].subtema[idSubtema].tiendaVirtual.collections.map((collection) =>
                    <MDBCol md='4' key={collection.id} className='mb-4'>
                        <div key={collection.id}>
                            <Card3d
                                collections={collection}
                            />
                        </div>
                    </MDBCol>
                )}
            </MDBRow>
        </div>
    );
}


export default Colecciones;