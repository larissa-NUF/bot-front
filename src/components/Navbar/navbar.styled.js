import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Navbar = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    width: '100%',
    height: theme.spacing(5.4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: theme.spacing(0, 9),
    
}));

export const LinkSidebar = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    marginRight: theme.spacing(2),
    '&:hover': {
        color: theme.palette.secondary.main,
     },
}));