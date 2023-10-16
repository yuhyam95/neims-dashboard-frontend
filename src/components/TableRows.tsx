import {
  Tr,
  Td,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  name: string;
  quantity: number;
  reason: string;
  station: string;
  date: boolean;
}
  

function TableRows(data: Props) {
  const {  name, quantity, reason, station, date } = data;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px" borderColor={borderColor} >
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td borderColor={borderColor}>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {quantity}
        </Text>
      </Td>
      <Td borderColor={borderColor}>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {reason}
        </Text>
      </Td>
      <Td borderColor={borderColor}>
       {station}
      </Td>
      <Td borderColor={borderColor}>
        {date}
      </Td>
    </Tr>
  );
}

export default TableRows;

