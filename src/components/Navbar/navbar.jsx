import { Link, ScopedCssBaseline, ThemeProvider, Typography } from '@mui/material'
import * as Styled from "./navbar.styled";

export function Navbar() {

  return (
    <Styled.Navbar>
      <Styled.LinkSidebar href="/" underline="none">
        Player
      </Styled.LinkSidebar>
      <Styled.LinkSidebar href="/documentacao" underline="none">
        Documentação
      </Styled.LinkSidebar>
    </Styled.Navbar>
  )
}

export default Navbar
