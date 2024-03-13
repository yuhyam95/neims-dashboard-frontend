import { SimpleGrid } from "@chakra-ui/react"
import OverviewCategoryCard from "./OverviewCategoryCard";

const data = [
{
    id: 1,
    name: "Food Items",
    total: 189767,
    color: '#049FCB'
},
{
    id: 2,
    name: "Non Food-Items",
    total: 189767,
    color: '#FF6347'
},
{
    id: 3,
    name: "Livelihood",
    total: 189767,
    color: '#00B5B0'
},
{
    id: 1,
    name: "Agro-chemicals",
    total: 189767,
    color: '#FFA523'
},
{
    id: 1,
    name: "Building Materials",
    total: 189767,
    color: '#9F48A6'
}
]

const OverviewGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 5 }} spacing={6} >
        
      {data?.map((category) => (
        <OverviewCategoryCard name={category.name} total={category.total} color={category.color} />
      ))}
        
    </SimpleGrid>
    
  )
}

export default OverviewGrid 