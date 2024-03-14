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

import BinCardRows from './BinCardRows'
import { BiSearchAlt2, } from 'react-icons/bi';
import {LiaDownloadSolid} from 'react-icons/lia'
import { PDFDownloadLink, Text as PdfText, Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CSVLink } from 'react-csv';
import moment from 'moment';

 
interface Props {
  name: string,
  quantity: number,
  bincard: BinCardItem[],

}

 interface BinCardItem {
  date: string;
  number: string;
  movement: string;
  quantity: number,
  balance: number,
  signature: string,
  createdAt: string,
  srvnumber: string,
  sivnumber: string
}

const itemsPerPage = 10;

const BinCard = ({bincard, name}: Props) => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfData, setPdfData] = useState<string[][]>([]);
  const [csvData, setCsvData] = useState<string[][]>([]);

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
    setCurrentPage(1); 
  };

  const filteredProducts = searchText === ''
    ? bincard
    : bincard?.filter((bincard) => {
        return Object.values(bincard).some((value) =>
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


  const generatePDF = () => {
    const pdfContent: any[][] = [];

    currentProducts.forEach((product) => {
      pdfContent.push([moment(product?.createdAt).format("MMMM Do YYYY"),  product?.srvnumber || product?.sivnumber, product?.movement, product?.quantity, product?.balance, product?.signature]);
    });
    setPdfData(pdfContent);
  };
  
  const generateCSV = useCallback(() => {
    const csvContent: any[] = [];
    currentProducts?.forEach((product) => {
      csvContent.push({
        Date: moment(product?.createdAt).format("MMMM Do YYYY"), 
        Movement: product?.movement,
        'SIV/SRV #': product?.srvnumber || product?.sivnumber, 
        Quantity: product?.quantity, 
        Balance: product?.balance, 
        Signature: product?.signature
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
    <div style={{ width: '90%', backgroundColor: 'white', borderRadius: '10px'}}>
    {  <Stack mb={4}>
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
              <CSVLink data={csvData} filename="bincard.csv">
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
              <PDFDownloadLink document={<PDFDocument data={pdfData} />} fileName="bincard.pdf">
                {({loading }) => (loading ? 'Loading document...' : 'Download PDF')}
              </PDFDownloadLink>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          </Stack>
        </HStack>
        <HStack width="45%" ml={4}>
          <Text color="#FFA523" as='b'>
            BIN CARD
          </Text>
        <Box borderWidth="0.5px" borderRadius="10px" width="25%" bg="#FAFAFA" display="flex"  justifyContent="center" alignItems="center">
        <Text color="#FFA523" as='b'>
          {name}
        </Text>
        </Box>
        </HStack>
        </Stack>}
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
                date={moment(product?.createdAt).format("MMMM Do YYYY")}
                number={product?.srvnumber || product?.sivnumber} 
                movement={product?.movement}
                quantity={product?.quantity}
                balance={product?.balance}
                signature={product?.signature}
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
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 6,
    marginBottom: 5,
  },
});

const PDFDocument: React.FC<{ data: any[] }> = ({ data }) => (
  
  <Document>
    <Page size="A3" style={styles.page}>
      <View style={styles.section}>
      <View style={{marginBottom: 5}}>
        <PdfText>RICE 25KG BIN CARD</PdfText>
        <PdfText>Station: Lagos Territorial Office</PdfText>
        <PdfText>Generated on 4th November 2023 at 8:39pm</PdfText>
      </View>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Date</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Number</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Movement</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Quantity</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Balance</PdfText>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <PdfText>Siganture</PdfText>
            </View>
          </View>

          {data.map((row, index) => (
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
              <View style={styles.tableCell}>
                <PdfText>{row[5]}</PdfText>
              </View>
              <View style={styles.tableCell}>
                <PdfText style={{marginLeft: 10}}>{row[6]}</PdfText>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default BinCard;


