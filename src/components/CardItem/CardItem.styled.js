import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: theme.spacing(1.5)
}));

export const Titulo = styled(Typography)(({ theme }) => ({
    marginBottom: 0,
    fontSize: theme.spacing(2)
}));

export const Posicao = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(1.7),
    fontWeight: '100',
    color: theme.palette.primary.main
}));

export const PosicaoCentro = styled('div')(({ theme }) => ({
    display: 'flex',

    alignItems: 'center',
    height: '100%'
}));