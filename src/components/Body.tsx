import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";


const Body = () => {

    return (
    <SimpleGrid columns={3} spacing={20} >    
    <ProductCard />
    </SimpleGrid>
  )
}

export default Body