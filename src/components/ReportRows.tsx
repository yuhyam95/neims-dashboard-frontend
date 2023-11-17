import {
    Tr,
    Td,
    Text,
  } from "@chakra-ui/react";
  
  
  interface Props {
    station: string;
    title: string;
    body: string;
    date: string
  }
    
  
  function ReportRows(props: Props) {
    const { station, title, body, date } = props;

    const truncatedBody = body.length > 50 ? `${body.slice(0, 50)}...` : body;

    return (
      <Tr>
        <Td >
            <Text>
              {station}
            </Text>
        </Td>
        <Td>
          <Text>
            {title}
          </Text>
        </Td>
        <Td>
          <Text>
            {truncatedBody}
          </Text>
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
  
  