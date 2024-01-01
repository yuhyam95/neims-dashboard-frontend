import { HStack, Heading } from "@chakra-ui/react"
import ReportsTable from "../components/ReportsTable"
import useReports from "../hooks/useReports";
import { useAuth } from "../context/AuthContext";

const ReportsPage = () => {
  const {user} = useAuth();
  const userRole = user?.role.name;
  const userStation = user?.station.name;

  let queryParams = {}
  if (userRole == 'Head-officer') {
    queryParams = {stationName: userStation}
  }
  else{
    queryParams = {approved: true};
  }
  const { reports } = useReports(queryParams)
  

  return (
    <>
    <HStack justify='space-between'>
    <Heading mb={4} ml={4}> Reports </Heading>
    </HStack>
    <ReportsTable reports={reports}/>
    </>
  )
}

export default ReportsPage  