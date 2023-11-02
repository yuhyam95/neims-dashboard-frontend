import { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  TableCaption,
  TableContainer,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  HStack,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react';
import { bincard } from '../constants/mockData';
import BinCardRows from './BinCardRows'
import { BiSearchAlt2, } from 'react-icons/bi';
import {LiaDownloadSolid} from 'react-icons/lia'
const itemsPerPage = 10;

const BinCard = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
    setCurrentPage(1); 
  };

  const filteredProducts = searchText === ''
    ? bincard
    : bincard.filter((bincard) => {
        return Object.values(bincard).some((value) =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        );
      });

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div style={{ width: '90%', backgroundColor: 'white', borderRadius: '10px'}}>
      <Stack mb={4}>
      <HStack mb={4} mt={4} >
          <InputGroup ml={4}>
          <InputLeftElement pointerEvents='none'>
            <BiSearchAlt2 color='gray.300' />
          </InputLeftElement>
          <Input        
            type="text"
            placeholder="Search Bin Card..."
            value={searchText}
            onChange={handleSearchTextChange}
            width='50%' />
        </InputGroup>
          <Stack direction='row' spacing={4} mr={4}>
            <Button leftIcon={<LiaDownloadSolid />} colorScheme='teal' variant='solid' size='sm'>
              CSV
            </Button>
            <Button leftIcon={<LiaDownloadSolid />} colorScheme='teal' variant='outline' size='sm'>
              PDF
            </Button>
          </Stack>
        </HStack>
        <HStack width="45%" ml={4}>
          <Text color="#FFA523" as='b'>
            BIN CARD
          </Text>
        <Box borderWidth="0.5px" borderRadius="10px" width="25%" bg="#FAFAFA" display="flex"  justifyContent="center" alignItems="center">
        <Text color="#FFA523" as='b'>
          RICE 25KG
        </Text>
        </Box>
        </HStack>
        </Stack>
    <TableContainer bg="#FAFAFA" borderRadius="10px">
      <Table size='lg'>
      <TableCaption>Product List</TableCaption>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>SIV/SRV</Th>
            <Th>Movement</Th>
            <Th>Quantity</Th>
            <Th>Balance</Th>
            <Th>Signature</Th>
          </Tr>
        </Thead>
            <Tbody>
              {currentProducts.map((product, index) => (
                <BinCardRows
                key={index}
                date={product.date}
                movement={product.movement}
                number={product.number}
                quantity={product.quantity}
                balance={product.balance}
                signature={product.signature}
              />
              ))}
            </Tbody>
            <tfoot>
              <Tr>
                <Td colSpan={5}>
                  <Flex justifyContent="center">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="solid"
                        colorScheme={index + 1 === currentPage ? 'blue' : 'gray'}
                        onClick={() => setCurrentPage(index + 1)}
                        borderRadius="full"
                        mx={1}
                      >
                        {index + 1}
                      </Button>
                    ))}
                  </Flex>
                </Td>
              </Tr>
            </tfoot>
          </Table>
          </TableContainer>
    </div> 
  );
};

export default BinCard;


