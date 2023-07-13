import React, { useState } from "react";
import ReactPlayer from 'react-player';
import * as Styled from "./Player.styled";
import { Typography } from "@mui/material";

function Player({ embedId, onEnded, isFetching, reproduzindo }) {
  
  return (
    <div className="video-responsive">
      {embedId && <ReactPlayer url={embedId}
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
        muted={false}
        autoPlay={true}
        onEnded={() => onEnded()}
        controls={true}
        playing={reproduzindo}
        width='100%'
        height='33.5vw'
      />
      }
      {!embedId && <Styled.SemVideo
        className="semVideo"
        sx={{
          width:'100%',
          height:'33.5vw'

        }}
      >
        <Styled.Titulo>SEM VÍDEO</Styled.Titulo>
        <Typography>Digite <b>!addvideo {'<url>'}</b> para adicionar um vídeo na fila</Typography>
        </Styled.SemVideo>}

    </div>
  )

};



export default Player;