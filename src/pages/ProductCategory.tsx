import { Heading, Stack, Text } from "@chakra-ui/react"
import MyTable from "../components/MyTable"

const ProductCategory = () => {
  return (
    <>
    <Stack margin={4}>
    <Heading>
        Lagos Territorial Office
    </Heading>
    <Text fontSize='lg'>
        Store Invetory
    </Text>
    </Stack>
    <MyTable showHeader={true} items={10}/>
    </>
  )
}

export default ProductCategory