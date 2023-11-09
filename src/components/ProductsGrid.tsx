
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import MyTable from './MyTable';
import MonthlyBeneficiariesChart from './MonthlyBeneficiariesChart';
import data from '../constants/mockData';



interface Props {
  productData: ProductItem[],
  showStation: boolean,
  showCategory: boolean
}

interface ProductItem {
  _id: string,
  name: string,
  date: string,
  quantity: number,
  station: StationItem,
  tag: string,
  createdAt: string
  category: CategoryItem
}

interface StationItem {
  _id: string,
  name: string
}

interface CategoryItem {
  _id: string,
  name: string
}

const ProductsGrid = ({productData, showStation, showCategory}: Props) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");


  return (
      <Flex flex="1" padding="10px" justify="space-around" direction={isLargerThan768 ? "row" : "column"}>
         <Box flex={isLargerThan768 ? 2 : 1} mr={isLargerThan768 ? 4 : 0}>
          <MyTable showHeader={false} items={5} width="100%" productData={productData} showStation={showStation} showCategory={showCategory}/>
        </Box> 

        <Flex direction="column"
              flex={isLargerThan768 ? 0.5 : 0.5} 
              ml={isLargerThan768 ? 1 : 0} 
              bg="white"
              borderRadius="10px"
              height={10}
              >
            <MonthlyBeneficiariesChart data={data} />
      </Flex>      
      </Flex>
  );
};

export default ProductsGrid;





