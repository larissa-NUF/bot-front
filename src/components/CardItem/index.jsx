import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import * as Styled from "./CardItem.styled";

function CardItem({ data, index }) {

  return (
    <Styled.Card>

      <Grid container mb={1.5}>
        
        <Grid item xs={1}>
          <Styled.PosicaoCentro>
          <Styled.Posicao variant="h6" className="titulo">
                #{index}
              </Styled.Posicao>
          </Styled.PosicaoCentro>
        
        </Grid>
        <Grid item xs={11}>
          <div>
            <a href={data.link} target="_blank">
              <Styled.Titulo variant="h6" >
                {data.titulo}
              </Styled.Titulo>
            </a>
            <Typography variant="caption" display="block" gutterBottom >
              {data.criador}
            </Typography>
          </div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" className="usuario">
          {data.usuario}
        </Typography>
        
        </Grid>
        
      </Grid>
      <Divider/>
    </Styled.Card>
    
  )

};



export default CardItem;