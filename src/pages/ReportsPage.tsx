import { Button, HStack, Heading } from "@chakra-ui/react"
import ReportsTable from "../components/ReportsTable"
import { FaPlus } from "react-icons/fa";
import { reports } from "../constants/mockData"

const ReportsPage = () => {
  return (
    <>
    <HStack justify='space-between'>
    <Heading mb={4} ml={4}> Reports </Heading>
    <Button leftIcon={<FaPlus />} colorScheme='teal' variant='solid'>
      Create Report
    </Button>
    </HStack>
    <ReportsTable reports={reports}/>
    </>
  )
}

export default ReportsPage  