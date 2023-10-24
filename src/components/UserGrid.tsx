import { Box, Flex, useMediaQuery } from "@chakra-ui/react"
import LineChart from "./LineChart";
import UserCard from "../components/UserCard";
import CategoryGrid from "./CategoryGrid";

interface StateData {
    id: number;
    state: string;
    months: {
      id: number;
      name: string;
      total: number;
    }[];
  }
  
  interface Props {
    data: StateData[];
  }

const UserGrid = ({data}: Props) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex flex="1" padding="10px" justify="space-around" direction={isLargerThan768 ? "row" : "column"}>
         <Box flex={isLargerThan768 ? 2 : 1} mr={isLargerThan768 ? 4 : 0}>
          <CategoryGrid />
          <LineChart data={data} />
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