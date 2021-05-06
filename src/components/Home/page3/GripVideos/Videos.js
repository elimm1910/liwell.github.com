import React, { useState } from 'react';
import styled from 'styled-components';

//componentes
import ListaHorizontalVideos from './ListaHorizontalVideos';
import SearchBar from '../../../componentesGLB/SearchBar';

const PositionCenter = styled.div`
text-align:center;
`;

function Videos({ lista, idLista, idSubtema, size, handleClickVideo }) {
  const [input, setInput] = useState('');
  const [videosListDefault, setVideosListDefault] = useState(lista[idLista].subtema[idSubtema].videos);
  const [videosList, setVideosList] = useState(lista[idLista].subtema[idSubtema].videos);

  const filterByTitle = async (e) => {
    const videosFiltrados = videosListDefault.filter(videos => {
      return videos.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setInput(e.target.value);
    setVideosList(videosFiltrados);
  }


  return (
    <PositionCenter className='pt-5'>
      <PositionCenter>
        <SearchBar
          input={input}
          setKeyword={filterByTitle}
        />
      </PositionCenter>
      <ListaHorizontalVideos
        videosFiltrados={videosList}
        size={size}
        handleClick={handleClickVideo}
      />
    </PositionCenter>
  );
}


export default Videos;