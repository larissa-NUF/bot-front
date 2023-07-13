import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Player from '../../components/Player';
import axios from 'axios';
import { Box, Card, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import * as Styled from "./Home.styled";
import CardItem from '../../components/CardItem';
import Carregando from '../../components/Carregando';
const URL = import.meta.env.VITE_URL_BACK;

const socket = io(URL);
function Home() {
  const [videoAtual, setVideoAtual] = useState({});
  const [listaVideo, setListaVideo] = useState([]);
  const [carregandoPlaylist, setCarregandoPlaylist] = useState(true);
  const [reproduzindo, setReproduzindo] = useState(false);
  //const [carregandoVideo, setCarregandoVideo] = useState(true);
  //TODO update tocando
  useEffect(() => {
    refreshPlaylist()
    refreshVideoAtual()

    socket.on("refreshVideoAtual", (data) => {
      refreshVideoAtual()
    })
    socket.on("refreshPlaylist", (data) => {
      refreshPlaylist()
    })
    socket.on("delete", (data) => {
      refreshPlaylist()
    })
    socket.on("skip", function () {
      proximoVideo()
    })
    socket.on("promote", (data) => {
      refreshPlaylist()
    })

  }, []);

  async function refreshVideoAtual() {
    axios.get(URL + '/listar-tocando')
      .then(response => {
        setVideoAtual(response.data)
      })
      .catch(error => {
        console.error(error);
      });

  }
  async function refreshPlaylist() {
    axios.get(URL + '/listar-playlist')
      .then(response => {
        setListaVideo(response.data)
        console.log(listaVideo)
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setCarregandoPlaylist(false)
      })

  }
  async function proximoVideo() {
    setReproduzindo(true)
    axios.post(URL + '/skip')
      .then(response => {
        refreshPlaylist()
        refreshVideoAtual()
      });

  }

  /* const deleteByIndex = async () => {
    await axios.delete(URL + '/listar/' + listaVideo[1]._id)
      .then(response => {
        console.log('deletado')
      })
      .catch(error => {
        console.error(error);
      });
    setListaVideo(oldValues => {
      return oldValues.filter((_, i) => i !== 1)
    })
  }; */
  return (
    <>
      <Styled.Container container spacing={3}>
        <Grid item xs={12} md={8}>
          <Styled.Video>
            <div>
              <Player embedId={videoAtual?.url} onEnded={proximoVideo} reproduzindo={reproduzindo} />
              <Styled.Titulo variant='h3' mt={3}>{videoAtual?.titulo} - {videoAtual?.criador}</Styled.Titulo>
            </div>


          </Styled.Video>
        </Grid>
        <Grid item xs={12} md={4}>
          <Styled.Playlist>
            <Styled.Titulo variant='h2' textAlign={'center'} mt={1} mb={2}>PLAYLIST DO CHAT</Styled.Titulo>
            <Styled.MaginDivider>
              <Divider />
            </Styled.MaginDivider>
            {carregandoPlaylist && <Carregando />}
            {listaVideo.length == 0 && !carregandoPlaylist && <>
              <Styled.SemVideo>
                <Styled.Titulo>SEM VÍDEOS PARA REPRODUZIR EM SEGUIDA</Styled.Titulo>
                <Typography>Digite <b>!addvideo {'<url>'}</b> para adicionar um vídeo na fila</Typography>
              </Styled.SemVideo>
            </>}
            {listaVideo && <div>{listaVideo.map((entry, index) => {
              return (
                <div key={entry.id}>
                  <CardItem data={entry} index={index + 1} />
                </div>
              )

            }

            )}
            </div>}
          </Styled.Playlist>
        </Grid >
      </Styled.Container >

    </>
  )
}

export default Home