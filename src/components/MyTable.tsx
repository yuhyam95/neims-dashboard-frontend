// import { DataGrid, GridColDef, } from '@mui/x-data-grid';
// import { products } from '../constants/mockData';
// import { useState } from 'react';

// const columns: GridColDef[] = [
//   { field: 'name', headerName: 'Name', width: 250 },
//   { field: 'quantity', headerName: 'Quantity', width: 210 },
//   { field: 'station', headerName: 'Station', width: 210 },
//   { field: 'reason', headerName: 'Reason', width: 210 },
//   { field: 'date', headerName: 'Order Date', width: 210 },
// ];

// const MyTable = () => {
//     const [searchText, setSearchText] = useState('');

//   const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(event.target.value);
//   };

//   const filteredProducts = searchText === ''
//     ? products
//     : products.filter(product => {
//       return Object.values(product).some((value: string | number) =>
//         String(value).toLowerCase().includes(searchText.toLowerCase())
//       );
//     });
//   return (
    
//     <div style={{ height: 400, width: '100%' }}>
//     <input
//         type="text"
//         placeholder="Search Products..."
//         value={searchText}
//         onChange={handleSearchTextChange}
//       />

//       <DataGrid
//         rows={filteredProducts}
//         columns={columns}
//         initialState={{
//             pagination: { paginationModel: { pageSize: 5 } },
//           }}
//          pageSizeOptions={[5, 10, 25]}
   
//       />
//     </div>
//   );
// };

// export default MyTable;


import { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  SimpleGrid,
  TableCaption,
  TableContainer,
  Flex,
  Button,
} from '@chakra-ui/react';
import { products } from '../constants/mockData';
import TableRows from './TableRows';

const itemsPerPage = 5;

const MyTable = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredProducts = searchText === ''
    ? products
    : products.filter((product) => {
        return Object.values(product).some((value) =>
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
    <div style={{ width: '100%' }}>
      <Input
        type="text"
        placeholder="Search Products..."
        value={searchText}
        onChange={handleSearchTextChange}
      />

<TableContainer bg="white" borderRadius="10px">
  <Table size='lg'>
  <TableCaption>Product List</TableCaption>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Quantity</Th>
        <Th>Reason</Th>
        <Th>Station</Th>
        <Th>Date</Th>
      </Tr>
    </Thead>
        <Tbody>
          {currentProducts.map((product, index) => (
            <TableRows
            key={index}
            name={product.name}
            station={product.station}
            reason={product.reason}
            quantity={product.quantity}
            date={product.date}
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

export default MyTable;


