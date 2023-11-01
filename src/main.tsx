import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { ThemeProvider } from '@mui/material/styles';
import App from './App.tsx'
import chakraTheme from './chakraTheme.ts'
import muiTheme from './muiTheme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
    <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
     <App />
    </ChakraProvider>
  </React.StrictMode>
)
