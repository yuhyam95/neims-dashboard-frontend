import {
    Tr,
    Td,
    Text,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
  
  
  interface Props {
    _id: string,
    state: string;
    lga: string;
    community: string;
    numberofaffectedpersons: number,
    datereported: string,
    approved: boolean
  }
  
  function ReportRows(props: Props) {
    const { _id, state, lga, community, numberofaffectedpersons, datereported, approved } = props;
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/singlereport', {state: {_id}});
    };
      
    return (
      <Tr onClick={handleClick} backgroundColor='white'>
        <Td >
            <Text>
              {state}
            </Text>
        </Td>
        <Td>
          <Text>
            {lga}
          </Text>
          </Td>
          <Td>
          <Text>
            {community}
          </Text>
          </Td>
          <Td>
          <Text>
            {numberofaffectedpersons}
          </Text>
        </Td>
        <Td>
        <Text>
            {datereported}
          </Text>
        </Td>
        <Td>
        {approved ? <Text>Approved</Text> : <Text>Not Approved</Text>}
        </Td>
      </Tr>
    );
  }
  
  export default ReportRows;
  
  