import { Box, Flex, useMediaQuery } from "@chakra-ui/react"
import UserCard from "../components/UserCard";
import CategoryGrid from "./CategoryGrid";
import CategoryColumnChart from "./CategoryColumnChart";


  
  interface Props {
    data: StationData;
    stateName: string,
    type?: string
  }


interface StationData {
  _id: string,
  name: string,
  total: number,
  change: string,
  category: CategoryItem[]
  productList: ProductItem[],
  head: string,
  mobile: number,
  location: string,
  type: string,
  areaofcoverage: string[]
} 

interface CategoryItem {
  _id: string,
  name: string,
  total: number,
  color: string
}

interface ProductItem{
  id: string; 
  name: string,
  quantity: number,
  tag: Boolean
}

const UserGrid = ({data, stateName, type }: Props) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    const category = data?.category;
    return (
    <Flex flex="1" padding="10px" justify="space-around" direction={isLargerThan768 ? "row" : "column"}>
         <Box flex={isLargerThan768 ? 2 : 1} >
          <Box mt={4}>
          <CategoryColumnChart station={data}/>
          </Box>
        </Box>       
      </Flex>
  )
}

export default UserGrid