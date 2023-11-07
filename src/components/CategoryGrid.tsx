import { SimpleGrid } from "@chakra-ui/react"
import CategoryCard from "./CategoryCard";

interface Props{
  data: CategoryItem[]
}

interface CategoryItem {
  id: string,
  name: string,
  total: number,
  color: string
}

const CategoryGrid = ({data}: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} padding="10px" spacing={8} >
      {data?.map((category) => (
        <CategoryCard name={category.name} total={category.total} color={category.color}/>
      ))}
        
    </SimpleGrid>
    
  )
}

export default CategoryGrid 