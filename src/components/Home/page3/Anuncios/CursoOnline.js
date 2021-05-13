import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CursoOnlineStyled = styled.div`
text-align: center;
h1{
    font-family: 'Lobster', cursive;
}
img{
    width:100%;
    height:100%;
}
`

function CursoOnline({texto, imagen, idSubtema}) {
    return (
        <CursoOnlineStyled>
            <div className='mt-3 mb-3'>
                <h1>Online course</h1>
                <img src={imagen} alt=''/>
                <p>{texto}</p>
                <Link to={`${idSubtema}/cursoOnline`} className="btn btn-danger btn-rounded">Join</Link>
            </div>
        </CursoOnlineStyled>
    );
}


export default CursoOnline;