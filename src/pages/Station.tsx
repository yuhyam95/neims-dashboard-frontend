
import data from '../constants/mockData'
import { Flex } from '@chakra-ui/react';
import UserGrid from '../components/UserGrid';
import ProductsGrid from '../components/ProductsGrid';
import CategoryGrid from '../components/CategoryGrid';



function Body() {
  return (
    <div>
    {/* <Flex>
        <CategoryGrid />
    </Flex> */}
      <Flex> 
      <UserGrid data={data} />
      </Flex>
      <Flex>
      <ProductsGrid />
      </Flex>
    </div>
  );
}

export default Body;
