import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import * as Styled from "./CardItem.styled";

function CardItem({ data, index }) {

  return (
    <Styled.Card>
      <Link href={data.url} target="_blank" underline="none">
        <Grid container>

          <Styled.ContainerPrincipal item xs={1}>

            <Styled.Posicao variant="h6">
              #{index}
            </Styled.Posicao>


          </Styled.ContainerPrincipal>
          <Styled.ContainerPrincipal item xs={4}>

            <Styled.Imagem src={data.imagem} />


          </Styled.ContainerPrincipal>
          <Styled.ContainerDetalhes item xs={7}>
            <Styled.Detalhes>

              <Styled.TituloVideoDiv>

                <Styled.TituloVideo variant="h6">
                  {data.titulo}
                </Styled.TituloVideo>

              </Styled.TituloVideoDiv>


              <Typography variant="caption" display="block">
                {data.criador}
              </Typography>
              <Typography variant="p" display="block">
                {data.usuario}
              </Typography>
            </Styled.Detalhes>

          </Styled.ContainerDetalhes>

        </Grid>
      </Link>
      <Divider />

    </Styled.Card>

  )

};



export default CardItem;