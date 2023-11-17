import { Heading } from "@chakra-ui/react"
import ReportsTable from "../components/ReportsTable"

import { reports } from "../constants/mockData"

const ReportsPage = () => {
  return (
    <>
    <Heading mb={4} ml={4}> Reports </Heading>
    <ReportsTable reports={reports}/>
    </>
  )
}

export default ReportsPage  