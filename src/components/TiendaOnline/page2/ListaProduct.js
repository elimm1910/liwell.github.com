import React from 'react';
import styled from 'styled-components';
import { FixedSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

//componentes
import ItemLista from './ItemLista';

const ListaProductStyled = styled.div`
.no-scrollbars{
      scrollbar-width:thin;
      scrollbar-color:transparent transparent;

      &::-webkit-scrollbar{
          width:1px;
      }
      &::-webkit-scrollbar-track{
          background: transparent;
      }
      &::-webkit-scrololbar-thumb{
          background-color: transparent;
      }
  }
  .no-scrollbars::-webkit-scrollbar{
      display:none;
  }
`
function ListaProduct({ collection, size }) {

  const Row = ({ index, style }) => (
    <div
      style={style} >
      <div key={collection.productos[index].id}>
        <ItemLista
          producto={collection.productos[index]}
        />
      </div>
    </div>
  );
  return (
    <ListaProductStyled>
      {size.width > size.height ?
        <div
          style={{
            height: "80vh",
            width: "100%",
          }}
        >
          <AutoSizer className='no-scrollbars'>
            {({ height, width }) => (
              <FixedSizeList
                height={height}
                width={width}
                itemCount={collection.productos.length}
                itemSize={size.height * 0.3}
                overscanCount={3}
              >
                {Row}
              </FixedSizeList>
            )}
          </AutoSizer>
        </div>
        :
        <div
          style={{
            marginTop: "2vh",
            height: "18vh",
            width: "100%",
          }}
        >
          <AutoSizer className='no-scrollbars'>
            {({ height, width }) => (
              <FixedSizeList
                height={height}
                width={width}
                itemCount={collection.productos.length}
                itemSize={size.height * 0.16}
                overscanCount={3}
                layout="horizontal"
              >
                {Row}
              </FixedSizeList>
            )}
          </AutoSizer>
        </div>
      }
    </ListaProductStyled>
  );
}


export default ListaProduct;