import { HStack, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import apiClient from "../services/api-client";
import ReportStat from "../components/ReportStat";

interface Report {
  state: string,
  lga: string,
  community: string
}

const SingleReport = () => {
  
    const location = useLocation()
    const {_id} = location.state;
    const [report, setReport] = useState<Report | null>(null);
    
    useEffect(() => {
      fetchData();
  }, []); 
  
  const fetchData = async () => {
        try {
                const res = await apiClient.get(`/report/${_id}`);
                setReport(res.data);
                console.log(res.data)
        } catch (error) {
            console.error(error);
        }
      };
return (
    <>
    <Heading mb={4} ml={4}> Report </Heading>
    <HStack spacing={8}>
      <ReportStat title="State" body={report?.state}/>
      <ReportStat title="LGA" body={report?.lga}/>
      <ReportStat title="Community" body={report?.community}/>
    </HStack>
    </>
    )
}
    

export default SingleReport