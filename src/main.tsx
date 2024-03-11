import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import chakraTheme from './chakraTheme.ts'
import { AuthProvider } from './context/AuthContext.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={chakraTheme}>
    <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
     <AuthProvider>
     <App />
     </AuthProvider>
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
