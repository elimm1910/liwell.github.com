import React from 'react';

//components
import CursoOnline from './CursoOnline';
import TiendaVirtual from './TiendaVirtual';
import Book from './Book';

function Anuncios({ lista, idLista, idSubtema, size }) {
    return(
    <div>
        <CursoOnline
            texto={lista[idLista].subtema[idSubtema].cursoOnline.texto}
            imagen={lista[idLista].subtema[idSubtema].cursoOnline.imagen}
            idSubtema={idSubtema}
        />
        <Book
            texto={lista[idLista].subtema[idSubtema].book.texto}
            imagenFront={lista[idLista].subtema[idSubtema].book.imagenFront}
            imagenBack={lista[idLista].subtema[idSubtema].book.imagenBack}
            imagenSide={lista[idLista].subtema[idSubtema].book.imagenSide}
            size={size}
        />
        <TiendaVirtual
            texto={lista[idLista].subtema[idSubtema].tiendaVirtual.texto}
            imagen1={lista[idLista].subtema[idSubtema].tiendaVirtual.imagen1}
            imagen2={lista[idLista].subtema[idSubtema].tiendaVirtual.imagen2}
            imagen3={lista[idLista].subtema[idSubtema].tiendaVirtual.imagen3}
            imagen4={lista[idLista].subtema[idSubtema].tiendaVirtual.imagen4}
            idLista={idLista}
            idSubtema={idSubtema}
        />
    </div>
    );
}


export default Anuncios;