import {
    Tr,
    Td,
    Text,
    Box,
  } from "@chakra-ui/react";
  
  
  interface Props {
    date: string;
    number: string;
    movement: string;
    quantity: number,
    balance: number,
    signature: string
  }
    
  
  function TableRows(props: Props) {
    const { date, number, movement, quantity, balance, signature } = props;
    
    return (
      <Tr>
        <Td >
            <Text>
              {date}
            </Text>
        </Td>
        <Td>
          <Box borderWidth="0.5px" borderRadius="10px" width="50%" display="flex" justifyContent="center" alignItems="center">
          <Text>
            {number}
          </Text>
          </Box>
        </Td>
        <Td>
          <Text>
            {movement}
          </Text>
        </Td>
        <Td>
        <Text>
            {quantity}
          </Text>
        </Td>
        <Td>
        <Text>
            {balance}
          </Text>
        </Td>
        <Td>
        <Text>
            {signature}
          </Text>
        </Td>
      </Tr>
    );
  }
  
  export default TableRows;
  
  