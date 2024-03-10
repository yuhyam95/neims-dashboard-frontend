import { useCallback, useState } from 'react';
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import TableRows from './TableRows';
import { BiSearchAlt2, } from 'react-icons/bi';
import {LiaDownloadSolid} from 'react-icons/lia'
import { PDFDownloadLink, Text as PdfText, Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CSVLink } from 'react-csv';
import moment from 'moment';

interface Props {
  showHeader: boolean,
  items: number, 
  width: string
  productData: ProductItem[],
  showStation: boolean
  showCategory: boolean,
  categoryName?: string,
  categoryTotal?: number,
  categoryColor?: string,
  showBinCard?: boolean,
  showTotal: boolean
  
}

interface ProductItem {
  _id: string,
  name: string,
  quantity: number,
  tag: string,
  category: CategoryItem,
  station: StationItem,
  date: string
  createdAt: string,
  bincard?: BinCardItem[],
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

interface BinCardItem {
  date: string;
  number: string;
  movement: string;
  quantity: number,
  balance: number,
  signature: string
}
  


const MyTable = ({showHeader, items, width, productData, showStation, showCategory, showTotal, categoryName, categoryColor, showBinCard}: Props) => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfData, setPdfData] = useState<string[][]>([]);
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [currentPageSet, setCurrentPageSet] = useState(1);
  const itemsPerPage = items;

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
    setCurrentPage(1); 
  };

  const filteredProducts = searchText === ''
    ? productData
    : productData?.filter((product) => {
        return Object.values(product).some((value) =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        );
      });

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);
  const totalPageSets = Math.ceil(totalPages / 10);


const calculateTotalQuantity = () => {
  let total = 0;
  filteredProducts?.forEach((product) => {
    total += product.quantity;
  });
  return total;
};

const totalQuantity = calculateTotalQuantity();


  const generatePDF = () => {
    const pdfContent: any[][] = [];
    pdfContent.push(['Name', 'Quantity', 'Station', 'Reason', 'Date']);
    currentProducts?.forEach((product) => {
      pdfContent.push([product.name, product.quantity, product.station.name, product.tag, moment(product.createdAt).format("MMMM Do YYYY")]);
    });
    setPdfData(pdfContent);
  };
  

  const generateCSV = useCallback(() => {
    const csvContent: any[] = [];
    filteredProducts?.forEach((product) => {
      csvContent.push({
        Name: product.name,
        Quantity: product.quantity,
        Station: product.station.name,
        Reason: product.tag,
        Date: moment(product.createdAt).format("MMMM Do YYYY"),
      });
    });
    setCsvData(csvContent);
  }, [filteredProducts]);

  const downloadPDF = () => {
    generatePDF();
  };

  const downloadCSV = () => {
    generateCSV();
  };

  return (
    <div style={{ width: width, backgroundColor: 'white', borderRadius: '10px'}}>
     {showHeader && 
     <Stack mb={4}>
      <HStack mb={4} mt={4} >
          <InputGroup ml={4}>
          <InputLeftElement pointerEvents='none'>
            <BiSearchAlt2 color='gray.300' />
          </InputLeftElement>
          <Input        
            type="text"
            placeholder="Search Items..."
            value={searchText}
            onChange={handleSearchTextChange}
            width='50%' />
        </InputGroup>
          <Stack direction='row' spacing={4} mr={4}>
          <Popover isLazy>
            <PopoverTrigger>
            <Button leftIcon={<LiaDownloadSolid />} colorScheme='teal' variant='solid' size='sm' onClick={downloadCSV}>
              CSV
            </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
              {csvData.length > 0 && (
              <CSVLink data={csvData} filename="table.csv">
                Download CSV
              </CSVLink>
                )}
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover isLazy>
            <PopoverTrigger>
            <Button leftIcon={<LiaDownloadSolid />} colorScheme='teal' variant='outline' size='sm' onClick={downloadPDF}>
              PDF
            </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
              <PDFDownloadLink document={<PDFDocument data={pdfData} />} fileName="table.pdf">
                {({ loading, }) => (loading ? 'Loading document...' : 'Download PDF')}
              </PDFDownloadLink>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          </Stack>
        </HStack>
        <HStack width="45%" ml={4}>
          <Text color={categoryColor} as='b' fontSize={'xl'}>
            {categoryName}
          </Text>
        {showTotal &&
        <Box borderWidth="0.5px" borderRadius="10px" width="50%" bg="#FAFAFA" display="flex"  justifyContent="center" alignItems="center">
        <Text as='b' fontSize={'xl'}>
          Total Items: {totalQuantity}
        </Text>
        </Box>}
        </HStack>
        </Stack>}   
        
      <TableContainer bg="white" borderRadius="10px">
      <Table size='lg'>
      <TableCaption>Product List</TableCaption>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Quantity</Th>
            <Th>Reason</Th>
            {showStation && <Th>Station</Th>} 
            {showCategory && <Th>Category</Th>}
            <Th>Date Added</Th>
            <Th>Expiry Date</Th>
          </Tr>
        </Thead>
            <Tbody>
              {currentProducts?.map((product, index) => (
                <TableRows
                showBinCard={showBinCard}
                showCategory={showCategory}
                showStation={showStation}
                key={index}
                name={product.name}
                station={showStation ? product.station.name : "null"}
                category={showCategory ? product?.category.name : "null"}
                reason={product.tag}
                quantity={product.quantity}
                date={moment(product.updatedAt).format("MMMM Do YYYY")}
                BinCardData={product?.bincard}
                expiryDate={product?.expiryDate}
              />
              ))}
            </Tbody>
                      <tfoot>
            <Tr>
              <Td colSpan={5}>
                <Flex justifyContent="center" flexWrap="wrap">
                  {Array.from({ length: Math.min(totalPages, 10) }).map((_, index) => {
                    const pageNumber = index + (currentPageSet - 1) * 10 + 1;

                    return (
                      <Box key={index} mx={1} width="30px" mb={2}>
                        <Button
                          size="sm"
                          variant="solid"
                          colorScheme={pageNumber === currentPage ? 'blue' : 'gray'}
                          onClick={() => setCurrentPage(pageNumber)}
                          borderRadius="full"
                          width="100%"
                        >
                          {pageNumber}
                        </Button>
                      </Box>
                    );
                  })}
                  {totalPageSets > 1 && currentPageSet > 1 && (
                    <Box mx={1} width="30px" mb={2}>
                      <Button
                        size="sm"
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => setCurrentPageSet(currentPageSet - 1)}
                        borderRadius="full"
                        width="100%"
                        ml={4}
                      >
                        Prev
                      </Button>
                    </Box>
                  )}
                  {totalPageSets > 1 && currentPageSet < totalPageSets && (
                    <Box mx={1} width="30px" mb={2}>
                      <Button
                        size="sm"
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => setCurrentPageSet(currentPageSet + 1)}
                        borderRadius="full"
                        width="100%"
                        ml={4}
                      >
                        Next
                      </Button>
                    </Box>
                  )}
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

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
  },
  tableHeader: {
    backgroundColor: '#ccc',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const PDFDocument: React.FC<{ data: any[] }> = ({ data }) => (
  
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Name</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Quantity</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Station</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Reason</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Order Date</PdfText>
            </View>
          </View>
          {data?.slice(1).map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <PdfText>{row[0]}</PdfText>
              </View>
              <View style={styles.tableCell}>
                <PdfText>{row[1]}</PdfText>
              </View>
              <View style={styles.tableCell}>
                <PdfText>{row[2]}</PdfText>
              </View>
              <View style={styles.tableCell}>
                <PdfText>{row[3]}</PdfText>
              </View>
              <View style={styles.tableCell}>
                <PdfText>{row[4]}</PdfText>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

