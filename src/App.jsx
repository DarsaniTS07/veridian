import React from 'react'
import Routes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
// Import Swiper styles

const App = () => {

  const theme = createTheme({
    palette:{
      primary:{
        main:'#009065',
        light:'#CFE1DF'
      },
      secondary:{
        main:'#51585E'
      }
    },
    typography:{
      fontFamily:`'DM_Sans', sans-serif`,
      h6: {
        fontFamily: `'IBM_Plex_Serif', serif`,
      },
      body1:{
        fontFamily:`'DM_Sans', sans-serif`,
      }

    },
})
  return (
    <>


    <Router>
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
    </Router>
    </>
  )
}

export default App