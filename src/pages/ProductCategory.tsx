import { Heading, Stack, Text } from "@chakra-ui/react"
import MyTable from "../components/MyTable"
import useProducts from "../hooks/useProducts";
import { useState } from "react";


const ProductCategory = () => {
  const [queryParams, setQueryParams] = useState({});
  const { products } = useProducts(queryParams);

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
    <MyTable showHeader={true} items={10} width="90%" showStation={false} productData={products} showCategory={false}/>
    </>
  )
}

export default ProductCategory