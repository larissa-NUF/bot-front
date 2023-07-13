import { ScopedCssBaseline, ThemeProvider, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import * as Styled from "./App.styled";
import { theme } from './theme';
import Navbar from './components/Navbar/navbar';

function App() {

  return (
    <ScopedCssBaseline>
      <ThemeProvider theme={theme}>
      <Styled.Layout>
        <Navbar/>
        <Outlet />
      </Styled.Layout>
      </ThemeProvider>
      
    </ScopedCssBaseline>
  )
}

export default App
