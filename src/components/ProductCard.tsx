import { Card, CardBody, CardHeader, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react"
import { PieChart } from "./PieChart"
import { MdSettings } from 'react-icons/md'


const ProductCard = () => {
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    size='sm'
    >
    <Stack>
     <CardHeader><Text fontSize='3xl' color="#809FB8"> LAGOS </Text></CardHeader>   
    <CardBody>
    <List spacing={3}>
        <ListItem 
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'>
            <ListIcon as={MdSettings} color='green.500' />
            Food Items
        </ListItem>
        <ListItem>
            <ListIcon as={MdSettings} color='green.500' />
            Non-Food Items
        </ListItem>
        <ListItem>
            <ListIcon as={MdSettings} color='green.500' />
            Livelihood
        </ListItem>
        <ListItem>
            <ListIcon as={MdSettings} color='green.500' />
            Agro-Chemicals
        </ListItem>
        <ListItem>
            <ListIcon as={MdSettings} color='green.500' />
            Building Materials
        </ListItem>
        </List>
    </CardBody>
  </Stack>       
  <PieChart /> 
    </Card>
  )
}

export default ProductCard