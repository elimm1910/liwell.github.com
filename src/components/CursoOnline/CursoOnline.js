import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

//componentes
import Carrusel from './Carrusel';
import Informacion from './Informacion';

const CursoOnlineStyled = styled.div`
margin-top:10vh;
`;
const First = styled.div`
height: 40vh;
`;
const Secund = styled.div`
height: 30vh;
`;

function CursoOnline(props) {
    const lista = useSelector((state) => state.lista)
    const size = useSelector((state) => state.size)
    const [active, setActive] = useState(0);
    let idLista = props.match.params.photoId;
    let idSubtema = props.match.params.temaId;

    return (
        <CursoOnlineStyled>
            <First>
                <Carrusel
                    lista={lista}
                    idLista={idLista}
                    idSubtema={idSubtema}
                    active={active}
                    setActive={setActive}
                    size={size}
                />
            </First>
            <Secund className='container'>
                <Informacion
                    curso={lista[idLista].subtema[idSubtema].cursoOnline.cursos[active === 12 ? 0 : active + 1]}
                />
            </Secund>
        </CursoOnlineStyled>
    );
}


export default CursoOnline;