import { ScopedCssBaseline, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './App.scss'

function App() {

  return (
    <ScopedCssBaseline>
      <div className='layout'>
        <div className='navbar'>
        </div>
        <Outlet />
      </div>
    </ScopedCssBaseline>
  )
}

export default App
