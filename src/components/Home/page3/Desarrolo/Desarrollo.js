import React from 'react';

//componentes
import CardImagen from './CardImagen';
import Acerca from './Acerca';
import CardHorizontal from './CardHorizontal';


function Desarrollo({ lista, idLista, idSubtema, size }) {
    return (
        <div className='mt-3 mb-3'>
            <CardImagen
                texto={lista[idLista].subtema[idSubtema].oferta.texto}
                imagen={lista[idLista].subtema[idSubtema].oferta.imagen}
                size={size}
            />
            <Acerca
                lista={lista}
                idLista={idLista}
                idSubtema={idSubtema}
                size={size}
            />
            <CardHorizontal
                title={lista[idLista].subtema[idSubtema].informacion3.title}
                texto={lista[idLista].subtema[idSubtema].informacion3.texto}
                imagen={lista[idLista].subtema[idSubtema].informacion3.imagen}
            />
        </div>
    );
}


export default Desarrollo;