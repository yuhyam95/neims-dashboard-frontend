import { Heading, Stack, Text } from "@chakra-ui/react"
import MyTable from "../components/MyTable"
import useProducts from "../hooks/useProducts";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const ProductCategory = () => {
  const location = useLocation()
  const {name, stateName, color, total, type} = location.state
  const [queryParams, setQueryParams] = useState({station: stateName, category: name})
  const { products } = useProducts(queryParams);
  

  return (
    <>
    <Stack margin={4}>
    <Heading>
        {stateName} {type} Office
    </Heading>
    <Text fontSize='lg'>
        Store Invetory
    </Text>
    </Stack>
    <MyTable showHeader={true} items={10} width="90%" showStation={false} 
              productData={products} showCategory={false} categoryName={name} categoryTotal={total} categoryColor={color} showBinCard/>
    </>
  )
}

export default ProductCategory