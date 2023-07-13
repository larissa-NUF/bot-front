import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 30, 20, 30), 
}));

export const Titulo = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(4),
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)

}));

export const TituloTabela = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1)
 
}));

export const Espacamento = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(5)

}));

export const SubTitulo = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)

}));