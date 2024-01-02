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
  Thead,
  Th,
} from '@chakra-ui/react';

import { BiSearchAlt2, } from 'react-icons/bi';
import ReportRows from './ReportRows';

interface Props {
  reports: ReportItem[],
}

 interface ReportItem {
    _id: string,
    state: string,
    lga: string,
    community: string,
    numberofaffectedpersons: number,
    datereported: string,
    approved: boolean
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
        <Thead>
          <Tr>
            <Th>State</Th>
            <Th>LGA</Th>
            <Th>Community</Th>
            <Th>Number of Affected Persons</Th>
            <Th>Date Reported</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
            <Tbody>
              {currentReports.map((report) => (
                <ReportRows
                    key={report?._id}
                    _id={report?._id}
                    state={report.state}
                    lga={report?.lga}
                    community={report?.community}
                    numberofaffectedpersons={report?.numberofaffectedpersons}
                    datereported={report?.datereported}
                    approved={report?.approved}
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


