import React from "react";
import ReactPlayer from 'react-player';
import './YoutubeEmbed.scss';
import { Box } from "@mui/material";

function YoutubeEmbed({ embedId, onEnded }) {
  return (
    <div className="video-responsive">
      {embedId && <ReactPlayer url={embedId}
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
        muted={true}
        autoPlay={true}
        onEnded={() => onEnded()}
        controls={true}
        playing={true}
        width='64vw'
        height='36vw'
      />
      }
      {!embedId && <Box
        className="semVideo"
        sx={{
          width: "64vw",
          height: "36vw"

        }}
      />}

    </div>
  )

};



export default YoutubeEmbed;