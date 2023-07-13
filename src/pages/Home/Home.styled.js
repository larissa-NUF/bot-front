import { Box, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Video = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(3)
}));


export const Titulo = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    fontWeight: 'bold',

}));

export const SemVideo = styled(Box)(({ theme }) => ({
    padding: theme.spacing(7),
    textAlign: 'center',
    color: theme.palette.secondary.contrastText
}));

export const Container = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(0, 9),
}));


export const MaginDivider = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2)
}));

export const Playlist = styled(Card)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(2,0),
    minHeight: '33.5vw',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.primary.contrastText}`

}));