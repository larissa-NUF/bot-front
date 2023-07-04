import { Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Video = styled('div')(({ theme }) => ({

 
    marginBottom: theme.spacing(3)
}));


export const Titulo = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    fontWeight: 'bold'
}));



export const Container = styled(Grid)(({ theme }) => ({
    minHeight: `calc(100vh - ${theme.spacing(9.4)})`,
    padding: theme.spacing(0, 9)
}));

export const Playlist = styled(Card)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(2),
    minHeight: '33.5vw',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.primary.contrastText}`

}));