import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

//componentes
import Colecciones from './Colecciones';
import NuevosProductos from './NuevosProductos';
import HotSection from './HotSection';
import TopSelling from './TopSelling';
import Footer from '../Home/page3/Footer/Footer';
import SignUp from '../Auth/SignUp';

const TiendaOnlineStyled = styled.div`
margin-top:120px;
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  margin: 0 0 10px;
}

a {
  font-weight: 500;
  -webkit-transition: 0.2s color;
  transition: 0.2s color;
}

a:hover, a:focus {
  text-decoration: none;
  outline: none;
}
`;
const DialogoStyled = styled.div`
  position: fixed;
  z-index: 1000000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

function TiendaOnline(props) {
  const [dialogo, setDialogo] = useState(false);
  const lista = useSelector((state) => state.lista);
  const size = useSelector((state) => state.size);
  var idLista = props.match.params.photoId;
  var idSubtema = props.match.params.temaId;

  const handleClick = () => {
    setDialogo(true)
  }
  const handleClose = () => {
    setDialogo(false)
  }

  return (
    <TiendaOnlineStyled>
      <Colecciones
        lista={lista}
        idLista={idLista}
        idSubtema={idSubtema}
        size={size}
      />
      <NuevosProductos
        lista={lista}
        idLista={idLista}
        idSubtema={idSubtema}
      />
      <HotSection
        image={lista[idLista].subtema[idSubtema].tiendaVirtual.hotSection}
        collection={lista[idLista].subtema[idSubtema].tiendaVirtual.collections[0]}
      />
      <TopSelling
        lista={lista}
        idLista={idLista}
      />
      <Footer
        handleClick={handleClick}
        lista={lista}
        idLista={idLista}
        idSubtema={idSubtema}
      />

      {dialogo ?
          <DialogoStyled>
            <SignUp
              handleClose={handleClose}
            />
          </DialogoStyled> : null}
    </TiendaOnlineStyled>
  );
}


export default TiendaOnline;