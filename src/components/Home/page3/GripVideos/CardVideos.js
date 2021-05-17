import React from 'react';
import styled from 'styled-components';
import { MDBCard } from 'mdbreact';

const CardVideosStyled = styled.div`
  text-align: center;
  .efecto{
    position: relative;
    overflow: hidden;
  }
  video{
    width:100%;
    height:100%;
  }
  @media only screen and (max-width: 500px) {
    p{
      font-size:small;
    }
  }
`

function CardVideos({preload, video, title, handleClick }) {

  return (
    <CardVideosStyled>
       <MDBCard news className="efecto">
          <video 
          poster={preload}
          onMouseOver={e => e.target.play()}
          onMouseOut={e => e.target.pause()}
          onClick={handleClick}
          src={video}
          type="video/mp4"
          >
          </video>
        </MDBCard>
        <p className='mt-2'>{title}</p>
    </CardVideosStyled>
  );
}


export default CardVideos;