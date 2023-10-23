import { SimpleGrid } from "@chakra-ui/react"
import CategoryCard from "./CategoryCard";


const CategoryGrid = () => {
  return (
    
    <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} padding="10px" spacing={6} >
        <CategoryCard name="Food Items" total={345000} color="#FFA523"/>
        <CategoryCard name=" Non Food Items" total={520000} color="#FE3169"/>
        <CategoryCard name="Agro-Chemical" total={97678} color="#9F48A6"/>
        <CategoryCard name="Building Materials" total={10000} color="#049FCB"/>
        <CategoryCard name="Livelihood " total={25200} color="#00B5B0"/>
    </SimpleGrid>
    
  )
}

export default CategoryGrid