import {
    Tr,
    Td,
    Text,
    Stack,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
  
  
  interface Props {
    station: string;
    title: string;
    body: string;
    date: string,
  }
  
  function ReportRows(props: Props) {
    const { station, title, body, date, } = props;
    
    const maxChars = 120;
    const truncatedBody = body.length > maxChars ? `${body.slice(0, maxChars)}...` : body;

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/singlereport', {state: {station, title, body, date}});
    };
    
    return (
      <Tr onClick={handleClick} backgroundColor='white'>
        <Td >
            <Text as='b'>
              {station}
            </Text>
        </Td>
        <Td>
        <Stack justifyContent='space-around'> 
          <Text as='b'>
            {title}
          </Text>
          <Text>
            {truncatedBody}
          </Text>
        </Stack>
        </Td>
        <Td>
        <Text>
            {date}
          </Text>
        </Td>
      </Tr>
    );
  }
  
  export default ReportRows;
  
  