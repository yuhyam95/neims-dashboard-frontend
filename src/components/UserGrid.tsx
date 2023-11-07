import { Box, Flex, useMediaQuery } from "@chakra-ui/react"
import LineChart from "./LineChart";
import UserCard from "../components/UserCard";
import CategoryGrid from "./CategoryGrid";


  
  interface Props {
    data: StationData;
  }


interface StationData {
  id: string,
  name: string,
  total: number,
  change: string,
  category: CategoryItem[]
  productList: ProductItem[]
} 

interface CategoryItem {
  id: string,
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

const UserGrid = ({data}: Props) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    const category = data?.category;
    
    return (
    <Flex flex="1" padding="10px" justify="space-around" direction={isLargerThan768 ? "row" : "column"}>
         <Box flex={isLargerThan768 ? 2 : 1} mr={isLargerThan768 ? 4 : 0}>
          <CategoryGrid data={category}/>
          {/* <LineChart data={data} /> */}
        </Box> 
  
        <Flex direction="column"
              flex={isLargerThan768 ? 0.5 : 1}
              ml={isLargerThan768 ? 2 : 0} >
          <UserCard />
      </Flex>      
      </Flex>
  )
}

export default UserGrid