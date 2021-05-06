import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

//componentes
import Barras from './page1/Barras';
import Portafolio from './page1/Portafolio'

const HomeStyled = styled.div`
position:relative;
overflow: hidden;
`
function Home() {
    const lista = useSelector((state) => state.lista)
    const orden = useSelector((state) => state.orden)
    const size = useSelector((state) => state.size)
    const clase = useSelector((state) => state.clase)
    const localizacion = useSelector((state) => state.localizacion)
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchMyApi(){
        let Myjson = await fetch('data.txt');
        Myjson = await Myjson.json();
        dispatch({
            type: "CARGAR_JSON",
            Myjson
        })
        }
        fetchMyApi();
    }, [dispatch])

return (
    <HomeStyled>
            <Portafolio
                lista={lista}
                orden={orden}
                size={size}
                clase={clase}
                localizacion={localizacion}
            />
            <Barras 
                orden={orden}
            />
    </HomeStyled>
);
}


export default Home;