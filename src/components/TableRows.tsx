import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

interface DashboardTableRowProps {
  name: string;
  status: string;
  budget: string;
  //progression: number;
  isLast: boolean;
}
  

function TableRows(props: DashboardTableRowProps) {
  const {  name, status, budget, isLast } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px" borderColor={borderColor} borderBottom={isLast ? "none" : undefined}>
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
      <Td borderBottom={isLast ? "none" : undefined} borderColor={borderColor}>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {budget}
        </Text>
      </Td>
      <Td borderBottom={isLast ? "none" : undefined} borderColor={borderColor}>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {status}
        </Text>
      </Td>
      <Td borderBottom={isLast ? "none" : undefined} borderColor={borderColor}>
        {/* <Flex direction="column">
          <Text
            fontSize="md"
            color="blue.500"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            colorScheme="blue"
            size="xs"
            value={progression}
            borderRadius="15px"
          />
        </Flex> */}
      </Td>
      <Td borderBottom={isLast ? "none" : undefined} borderColor={borderColor}>
        <Button p="0px" bg="transparent" variant="no-effects">
          <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
        </Button>
      </Td>
    </Tr>
  );
}

export default TableRows;

