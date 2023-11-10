import { Heading, Stack, Text } from "@chakra-ui/react"
import MyTable from "../components/MyTable"
import useProducts from "../hooks/useProducts";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const ProductCategory = () => {
  const [queryParams, setQueryParams] = useState({});
  const location = useLocation()
  const {name, stateName, color, total} = location.state
  
  const { products } = useProducts({station: stateName, category: name});
  console.log(products)

  return (
    <>
    <Stack margin={4}>
    <Heading>
        {stateName} Territorial Office
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