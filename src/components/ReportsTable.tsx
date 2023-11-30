import { useState } from 'react';
import {
  Table,
  Tbody,
  Tr,
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
} from '@chakra-ui/react';

import { BiSearchAlt2, } from 'react-icons/bi';
import ReportRows from './ReportRows';
import moment from 'moment';

interface Props {
  reports: ReportItem[],
}

 interface ReportItem {
    _id: string,
    station: {
      _id: string,
      name: string
    },
    title: string,
    body: string,
    createdAt: string,
}


const itemsPerPage = 10;

const ReportsTable = ({reports}: Props) => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
    setCurrentPage(1);   
  };

  const filteredReports = searchText === ''
    ? reports
    : reports?.filter((reports) => {
        return Object.values(reports).some((value) =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        );
      });

  const indexOfLastReport = currentPage * itemsPerPage;
  const indexOfFirstReport = indexOfLastReport - itemsPerPage;
  const currentReports = filteredReports?.slice(
    indexOfFirstReport,
    indexOfLastReport
  );

  const totalPages = Math.ceil(filteredReports?.length / itemsPerPage);


  return (
    <div style={{ width: '100%', backgroundColor: 'white', borderRadius: '10px'}}>
      <Stack mb={4}>
      <HStack mb={4} mt={4} >
          <InputGroup ml={4}>
          <InputLeftElement pointerEvents='none'>
            <BiSearchAlt2 color='gray.300' />
          </InputLeftElement>
          <Input        
            type="text"
            placeholder="Search Reports"
            value={searchText}
            onChange={handleSearchTextChange}
            width='50%' />
        </InputGroup>
        </HStack>
        </Stack>
    <TableContainer bg="#FAFAFA" borderRadius="10px">
      <Table size='lg'>
      <TableCaption>Reports</TableCaption>
        {/* <Thead>
          <Tr>
            <Th>Station</Th>
            <Th>Report</Th>
          </Tr>
        </Thead> */}
            <Tbody>
              {currentReports.map((report) => (
                <ReportRows
                    key={report?._id}
                    station={report.station?.name}
                    title={report?.title}
                    body={report?.body}
                    date={moment(report?.createdAt).format('MMMM Do YYYY')}
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

export default ReportsTable;


