import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import MyTable from './MyTable';

interface Props {
  productData: ProductItem[],
  showStation: boolean,
  showCategory: boolean,
  showHeader: boolean,
  showTotal: boolean
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
  updatedAt: string,
  expiryDate: string
}

interface StationItem {
  _id: string,
  name: string
}

interface CategoryItem {
  _id: string,
  name: string
}

const ProductsGrid = ({productData, showStation, showCategory, showHeader, showTotal}: Props) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");


  return (
      <Flex flex="1" padding="10px" direction={isLargerThan768 ? "row" : "column"}>
         <Box flex={isLargerThan768 ? 2 : 1} mr={isLargerThan768 ? 4 : 0}>
          <MyTable showHeader={showHeader} items={5} width="100%" productData={productData} showStation={showStation} showCategory={showCategory} showTotal={showTotal}/>
        </Box>       
      </Flex>
  );
};

export default ProductsGrid;





