import {
  Tr,
  Td,
  Text,
  Box,
} from "@chakra-ui/react";


interface Props {
  name: string;
  quantity: number;
  reason: boolean;
  station: string;
  date: string;
}
  

function TableRows(props: Props) {
  const {  name, quantity, reason, station, date } = props;
  
  return (
    <Tr>
      <Td >
          <Text>
            {name}
          </Text>
      </Td>
      <Td>
        <Box borderWidth="0.5px" borderRadius="10px" width="50%" display="flex" justifyContent="center" alignItems="center">
        <Text>
          {quantity}
        </Text>
        </Box>
      </Td>
      <Td>
      <Box borderWidth="0.5px" borderRadius="10px" width="80%" bg={reason == true ? '#BAF2E0' : '#FBD8D8' } display="flex" justifyContent="center" alignItems="center">
        <Text color={reason === true ? '#2FD197' : '#EB4547' }>
          {reason === true ? "RESTOCK" : "DISTRIBUTION"}
        </Text>
        </Box>
      </Td>
      <Td>
       {station}
      </Td>
      <Td>
        {date}
      </Td>
    </Tr>
  );
}

export default TableRows;

