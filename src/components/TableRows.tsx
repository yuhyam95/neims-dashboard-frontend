import {
  Tr,
  Td,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


interface Props {
  name: string;
  quantity: number;
  reason: string;
  station: string;
  date: string;
  category: string,
  showStation: boolean
  showCategory: boolean,
  showBinCard?: boolean 
  BinCardData?: BinCardItem[],
  expiryDate: string
}

interface BinCardItem {
  date: string;
  number: string;
  movement: string;
  quantity: number,
  balance: number,
  signature: string
}
  
  

function TableRows(props: Props) {
  const {  name, quantity, reason, station, date, category, showStation, showCategory, showBinCard, BinCardData, expiryDate } = props;
  
  const navigate = useNavigate()

    const handleClick = () => {
      navigate('/bincardpage', {state: {BinCardData, name, quantity}});
    };  
  


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
      {showStation &&
      <Td>
       {station}
      </Td>}
      <Td>
      <Box borderWidth="0.5px" borderRadius="10px" width="100%" bg={reason == 'restock' ? '#BAF2E0' : '#FBD8D8' } display="flex" justifyContent="center" alignItems="center">
        <Text color={reason === 'restock' ? '#2FD197' : '#EB4547' }>
          {reason === 'restock' ? "RESTOCK" : "DISTRIBUTION"}
        </Text>
        </Box>
      </Td>
      {showCategory &&
      <Td>
       {category}
      </Td>}
      <Td>
        {date}
      </Td>
      <Td>
        {expiryDate}
      </Td>
      {showBinCard && <Td>
      <Button colorScheme='teal' variant='solid' size='sm' onClick={handleClick}>
          BIN CARD
      </Button>
      </Td>}
    </Tr>
  );
}

export default TableRows;

