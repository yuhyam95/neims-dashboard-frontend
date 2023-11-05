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
import { products } from '../constants/mockData';
import TableRows from './TableRows';
import { BiSearchAlt2, } from 'react-icons/bi';
import {LiaDownloadSolid} from 'react-icons/lia'
import { PDFDownloadLink, Text as PdfText, Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CSVLink } from 'react-csv';

interface Props {
  showHeader: boolean,
  items: number, 
  width: string
}

const MyTable = ({showHeader, items, width}: Props) => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfData, setPdfData] = useState<string[][]>([]);
  const [csvData, setCsvData] = useState<string[][]>([]);
  
  const itemsPerPage = items;

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
    setCurrentPage(1); 
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

  const generatePDF = () => {
    const pdfContent: any[][] = [];
    pdfContent.push(['Name', 'Quantity', 'Station', 'Reason', 'Order Date']);
    currentProducts.forEach((product) => {
      pdfContent.push([product.name, product.quantity, product.station, product.reason, product.date]);
    });
    setPdfData(pdfContent);
  };
  

  const generateCSV = useCallback(() => {
    const csvContent: any[] = [];
    currentProducts.forEach((product) => {
      csvContent.push({
        Name: product.name,
        Quantity: product.quantity,
        Station: product.station,
        Reason: product.reason,
        'Order Date': product.date,
      });
    });
    setCsvData(csvContent);
  }, [currentProducts]);

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
            placeholder="Search Products..."
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
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
              </PDFDownloadLink>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          </Stack>
        </HStack>
        <HStack width="45%" ml={4}>
          <Text color="#FFA523" as='b'>
            FOOD ITEMS
          </Text>
        <Box borderWidth="0.5px" borderRadius="10px" width="25%" bg="#FAFAFA" display="flex"  justifyContent="center" alignItems="center">
        <Text color="#FFA523" as='b'>
          45,345
        </Text>
        </Box>
        </HStack>
        </Stack>}   
        
        <TableContainer bg="#FAFAFA" borderRadius="10px">
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
          {data.slice(1).map((row, index) => (
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

