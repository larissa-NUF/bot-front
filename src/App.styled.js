import { styled } from "@mui/material/styles";

export const Navbar = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    width: '100%',
    height: theme.spacing(5.4),
    marginBottom: theme.spacing(4)
}));

export const Layout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light
}));
