import { Button, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import apiClient from "../services/api-client";
import ReportStat from "../components/ReportStat";
import { FaCheck } from "react-icons/fa6";
import moment from "moment";
import { useAuth } from "../context/AuthContext";

interface Report {
  state: string,
  lga: string,
  community: string,
  natureofdisaster: string,
  natureofdamage: string,
  dateofoccurence: string,
  datereported: string,
  createdAt: string,
  numberofaffectedpersons: number,
  numberofhouseholdsaffected: number,
  numberofmen: number,
  numberofwomen: number,
  numberofchildren: number,
  numberofhousescompletelydamaged: number, 
  numberofhousespartiallydamaged: number, 
  numberofinjured: number, 
  numberofdeath: number,
  approved: boolean,
  longitude: string,
  latitude: string

}

const SingleReport = () => {
  
    const {user} = useAuth();
    const location = useLocation()
    const {_id} = location.state;
    const [report, setReport] = useState<Report | null>(null);
    const userRole = user?.role.name;

    useEffect(() => {
      fetchData();
  }, []); 
  
  const fetchData = async () => {
        try {
                const res = await apiClient.get(`/report/${_id}`);
                setReport(res.data);
        } catch (error) {
            console.error(error);
        }
      };

      const ApproveReport = async () => {
        try {
          const req = await apiClient.put(`/report/${_id}`,
          {
              approved: true
          });
          console.log(req.data)
      } catch (error) {
      console.error(error);
      }

    }

  const dateofassessment = moment(report?.createdAt).format('D/MM/YYYY')    

return (
    <>
    <HStack justify='space-between'>
    <Heading mb={4} ml={4}> Report </Heading>
    {userRole == "Head-officer" && report?.approved == false ?
    <HStack spacing={2} mr={8}>
    <Text fontSize='20'>Approve: </Text>
    <Button size='sm' width='20' colorScheme='teal' variant='outline' onClick={ApproveReport}><FaCheck color='teal'/></Button>
    </HStack> : 
    <Text fontSize='20'> Status: Approved</Text>
    }
    </HStack>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 5 }} spacing={6} >
      <ReportStat title="State" body={report?.state}/>
      <ReportStat title="LGA" body={report?.lga}/>
      <ReportStat title="Community" body={report?.community}/>
      <ReportStat title="Longitude" body={report?.longitude}/>
      <ReportStat title="Latitude" body={report?.latitude}/>
      <ReportStat title="Nature of Disaster" body={report?.natureofdisaster}/>
      <ReportStat title="Nature of Damage" body={report?.natureofdamage}/>
      <ReportStat title="Date of Occurence" body={report?.dateofoccurence}/>
      <ReportStat title="Date Reported" body={report?.datereported}/>
      <ReportStat title="Date of Assessment" body={dateofassessment}/>
      <ReportStat title="Number of Affected Persons" body={report?.numberofaffectedpersons}/>
      <ReportStat title="Number of Households Affected" body={report?.numberofhouseholdsaffected}/>
      <ReportStat title="Number of Men" body={report?.numberofmen}/>
      <ReportStat title="Number of Women" body={report?.numberofwomen}/>
      <ReportStat title="Number of Children" body={report?.numberofchildren}/>
      <ReportStat title="Houses Completely Damaged" body={report?.numberofhousescompletelydamaged}/>
      <ReportStat title="Houses Partially Damaged" body={report?.numberofhousespartiallydamaged}/>
      <ReportStat title="Number of Injured" body={report?.numberofinjured}/>
      <ReportStat title="Number of Death" body={report?.numberofdeath}/>
    </SimpleGrid>
    </>
    )
}
    

export default SingleReport