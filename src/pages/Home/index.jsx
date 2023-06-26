import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import axios from 'axios';
import { Divider, Grid, Typography } from '@mui/material';
import './Home.scss';
import CardItem from '../../components/CardItem';
const URL = import.meta.env.VITE_URL_BACK;

const socket = io(URL);
function Home() {
  console.log(import.meta.env.VITE_URL_BACK)
  const [videoAtual, setVideoAtual] = useState("");
  const [listaVideo, setListaVideo] = useState([]);



  useEffect(() => {
    axios.post(URL + '/listar')
      .then(response => {
        setListaVideo(response.data);
        console.log(response.data[0].url)
        setVideoAtual(response.data[0].url)
      })
      .catch(error => {
        console.error(error);
      });

    socket.on("video", (data) => {
      console.log(data)
      if (data != null) {
        setListaVideo(oldArray => [...oldArray, data]);

      }
    })
    socket.emit("add", "mensagem video")
    socket.on("delete", (data) => {
      console.log(data)
      setListaVideo(oldValues => {
        return oldValues.filter((_, i) => i !== Number(data))
      })
    })


  }, []);

  const proximoVideo = async () => {
    setVideoAtual(listaVideo[1].url)
    await axios.delete(URL + '/listar/' + listaVideo[0]._id)
      .then(response => {
        console.log('próximo video')
        setListaVideo(oldValues => {
          return oldValues.filter((_, i) => i !== 0)
        })
      })
      .catch(error => {
        console.error(error);
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
      <Grid container >
        <Grid item xs={8}>
          <div className='video'>
            <YoutubeEmbed embedId={videoAtual} onEnded={proximoVideo} />
          </div>
        </Grid>
        <Grid item xs={4} paddingRight={3} paddingLeft={2}>
          <Typography variant='h2' fontSize={50} textAlign={'center'} mb={3}>Playlist do chat</Typography>
          <Divider/>
          <div>{listaVideo.map((entry, index) => {
            if (index != 0) return (
              <div key={entry._id}>
                <CardItem data={entry} index={index} />
              </div>
            )

          }

          )}
          </div>
        </Grid>
      </Grid>

    </>
  )
}

export default Home