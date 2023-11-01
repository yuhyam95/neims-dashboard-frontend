import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import chakraTheme from './chakraTheme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
    <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
     <App />
    </ChakraProvider>
  </React.StrictMode>
)
