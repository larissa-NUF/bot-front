import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SemVideo = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: theme.palette.secondary.contrastText
}));

export const Titulo = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(8),
    fontWeight: "bold",
}));