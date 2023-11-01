import { Grid, GridItem } from '@chakra-ui/react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Body from './pages/Dashboard'
import Login from './pages/Login'
import MyTable from './components/MyTable'

function App() {
    
  return (
//     <Grid
//   templateAreas={`"header header"
//                   "nav main"
//                   "nav footer"`}
//   gridTemplateRows={'50px 1fr 30px'}
//   gridTemplateColumns={'150px 1fr'}
//   h='1000px'
//   gap='1'
//   color='blackAlpha.700'
//   fontWeight='bold'
// >
//   <GridItem pl='2' area={'header'}>
//     <Header />
//   </GridItem>
//   <GridItem pl='2'  area={'nav'}>
//     <SideBar />
//   </GridItem>
//   <GridItem pl='2' bg='#F7F8FA' area={'main'}>
//   <Body />
//   </GridItem>
//   <GridItem pl='2' bg='blue.300' area={'footer'}>
//     Footer
//   </GridItem>
// </Grid>

    <SideBar />
    //  <Login />
  )
  
}

export default App
