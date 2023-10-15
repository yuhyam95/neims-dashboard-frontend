import { Table, Tbody, Td, Tr } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";


interface StateData {
    id: number;
    state: string;
    months: {
      id: number;
      name: string;
      total: number;
    }[];
  }
  
  interface Props {
    data: StateData[];
  }

const Reports = ({data}: Props) => {
  return (
    <Table variant="simple" size="sm">
          <Tbody>
            {data.map((stateData) => (
              <Tr key={stateData.id}>
                <Td>
                  <MdOutlineEmail size="20px" color="#85A3BB" />
                </Td>
                <Td fontSize="sm" color="black" isTruncated>
                  {stateData.state} Office
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
  )
}

export default Reports