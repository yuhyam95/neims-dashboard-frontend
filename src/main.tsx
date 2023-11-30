import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import chakraTheme from './chakraTheme.ts'
import { AuthProvider } from './context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
    <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
     <AuthProvider>
     <App />
     </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
)
