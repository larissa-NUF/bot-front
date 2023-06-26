import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import './CardItem.scss';

function CardItem({ data, index }) {

  return (
    <div className="cardItem">

      <Grid container>
        <Grid item xs={11}>
          <div>
            <a href={data.link} target="_blank">
              <Typography variant="h6" className="titulo">
                {data.titulo}
              </Typography>
            </a>
            <Typography variant="caption" display="block" gutterBottom >
              {data.criador}
            </Typography>
          </div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" className="usuario">
          {data.usuario}
        </Typography>
        
        </Grid>
        <Grid item xs={1}>
        <Typography variant="h6" className="titulo">
                #{index}
              </Typography>
        </Grid>
        
      </Grid>
      <Divider/>
    </div>
    
  )

};



export default CardItem;