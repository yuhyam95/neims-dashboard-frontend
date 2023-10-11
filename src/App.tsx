import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Body from './components/Body'

function App() {
    
  return (
    <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='1000px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' area={'header'}>
    <Header />
  </GridItem>
  <GridItem pl='2'  area={'nav'}>
    <NavBar />
  </GridItem>
  <GridItem pl='2' bg='#F7F8FA' area={'main'}>
  <Body />
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>

  )
  
}

export default App
