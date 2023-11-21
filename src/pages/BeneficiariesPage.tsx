import { Box, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import useBeneficiaries from "../hooks/useBeneficiaries"
import BeneficiariesCard from "../components/BeneficiariesCard";
import { IoManSharp, IoWomanSharp } from "react-icons/io5";
import { FaChildren, FaPeopleRoof } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import BigCard from "../components/BigCard";
import BeneficiariesGrid from "../components/BeneficiariesGrid";

const BeneficiariesPage = () => {
const queryParams = "";    
const {beneficiariesData} = useBeneficiaries(queryParams)

const totalbeneficiaries = 
  (beneficiariesData?.men || 0) +
  (beneficiariesData?.women || 0) +
  (beneficiariesData?.children || 0);

return (
    <>
    <Box mb={200}>
    <SimpleGrid minChildWidth='120px' spacing='40px'>
    <Box height='160px'>
      <Stack spacing={3}>
       <BeneficiariesCard name="Men" total={beneficiariesData?.men} color="#0090FF" icon={IoManSharp}/>
       <BeneficiariesCard name="Women" total={beneficiariesData?.women} color="#FE3169" icon={IoWomanSharp}/>
      </Stack>  
    </Box>
    <Box height='120px'>
    <BigCard name="Total Beneficiaries" total={totalbeneficiaries} color="#FFA523" size="lg" icon={FaPeopleRoof} height={280}/>
    </Box>
    <Box height='120px'>
     <Stack spacing={3}>   
    <BeneficiariesCard name="Children" total={beneficiariesData?.children} color="#A8CF45" icon={FaChildren}/>
    <BeneficiariesCard name="Households" total={beneficiariesData?.children} color="#A8CF45" icon={FaHome}/>   
    </Stack>
    </Box>
    </SimpleGrid>
    </Box>
    <BeneficiariesGrid />
    </>
  )
}

export default BeneficiariesPage