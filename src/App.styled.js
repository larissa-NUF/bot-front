import { styled } from "@mui/material/styles";

export const Layout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
}));
