import React from 'react';
import styled from 'styled-components';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

//componentes
import CardVideos from './CardVideos';

const ListHorizontalVideosStyled = styled.div`
  text-align: center;
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

function ListHorizontalVideos({ videosFiltrados, size, handleClick }) {
    var columnNum = 4;
    var factor = 0.21;
    if (videosFiltrados.length < 4) {
        columnNum = videosFiltrados.length;
        if (size.width < 400) {
            factor = 0.42;
        } else if (size.width < 700) {
            factor = 0.28;
        }
    } else if (size.width < 400) {
        columnNum = 2;
        factor = 0.42;
    } else if (size.width < 700) {
        columnNum = 3;
        factor = 0.28;
    } else {
        columnNum = 4;
    }
    const Cell = ({ columnIndex, rowIndex, style }) => (
        <div
            style={style} >
            <div className='container pt-3' key={rowIndex * columnNum + columnIndex}>
                <CardVideos
                    preload={videosFiltrados[rowIndex * columnNum + columnIndex].url}
                    video={videosFiltrados[rowIndex * columnNum + columnIndex].urlVideo}
                    title={videosFiltrados[rowIndex * columnNum + columnIndex].title}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );

    return (
        <ListHorizontalVideosStyled>
            {videosFiltrados.length > 0 ?
                <div
                    style={{
                        height: size.height * 0.62,
                        width: "85%",
                        marginLeft: '7.25%',
                        marginRigth: '7.25%',
                        background: ' #e6dad5'
                    }}
                >
                    <AutoSizer className='no-scrollbars'>
                        {({ height, width }) => (
                            <Grid
                                columnCount={columnNum}
                                columnWidth={size.width * factor}
                                height={height}
                                width={width}
                                rowCount={videosFiltrados.length / columnNum}
                                rowHeight={size.width * factor * 0.8}
                                overscanCount={5}
                            >
                                {Cell}
                            </Grid>
                        )}
                    </AutoSizer>
                </div>
                :
                <div className='container'
                    style={{
                        height: size.height * 0.61,
                        width: "85%",
                        marginLeft: '7.25%',
                        marginRigth: '7.25%',
                        background: ' #e6dad5'
                    }}>
                    <p className='pt-5'>No se ha encontrado ningun resultado</p>
                </div>
            }
        </ListHorizontalVideosStyled>
    );
}


export default ListHorizontalVideos;




















// import React from 'react';
// import styled from 'styled-components';
// import { MDBRow, MDBCol } from 'mdbreact';

// //componentes
// import CardVideos from './CardVideos';

// const ListHorizontalVideosStyled = styled.div`
//   text-align: center;
//   .listaCard{
//       width:100%;
//       height:100%;
//   }
// `

// function ListHorizontalVideos({ videosFiltrados, size }) {
//     return (
//         <ListHorizontalVideosStyled>
//                 <div className='container'>
//                     <MDBRow className='mb-6 r mx-auto'>
//                         {videosFiltrados.map((video) =>
//                             <MDBCol md="3" lg="3" key={video.id}>
//                                 <CardVideos
//                                     video={video.url}
//                                     title={video.title}
//                                     size={size}
//                                 />
//                             </MDBCol>
//                         )}
//                     </MDBRow>
//                 </div>
//         </ListHorizontalVideosStyled>
//     );
// }


// export default ListHorizontalVideos;