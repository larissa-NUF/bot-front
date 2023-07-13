import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '&:hover': {
        background: theme.palette.secondary.light,
     },
    padding: theme.spacing(0,2)
}));

export const Titulo = styled(Typography)(({ theme }) => ({
    margin: 0,
   padding: 0,
    fontSize: theme.spacing(2),
    //lineHeight: theme.spacing(2)

    
}));

export const Posicao = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(1.7),
    fontWeight: '100',
    color: theme.palette.primary.main,
    paddingRight: theme.spacing(1)
}));

export const PosicaoCentro = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '100%'
}));

export const Detalhes = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%'
}));

export const TituloVideoDiv = styled('div')(({ theme }) => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": '2',
    "-webkit-box-orient": "vertical"
}));

export const TituloVideo = styled(Titulo)(({ theme }) => ({
    wordBreak: 'break-all',
    lineHeight: theme.spacing(2)
}));

export const Imagem = styled('img')(({ theme }) => ({
    width: '100%',
    paddingRight: theme.spacing(2),
    
}));

export const ContainerPrincipal = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5, 0)
    
}));
export const ContainerDetalhes = styled(Grid)(({ theme }) => ({
  
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    padding: theme.spacing(1.5, 0),
    
}));