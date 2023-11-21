import { Box, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import useBeneficiaries from "../hooks/useBeneficiaries"
import BeneficiariesCard from "../components/BeneficiariesCard";
import { IoManSharp, IoWomanSharp } from "react-icons/io5";
import { FaChildren, FaPeopleRoof } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import BigCard from "../components/BigCard";
import StateBeneficiaries from "../components/StateBeneficiaries";

const BeneficiariesPage = () => {
const queryParams = "";    
const {beneficiaries} = useBeneficiaries(queryParams)
console.log(beneficiaries)

const totalbeneficiaries = beneficiaries?.men + beneficiaries?.women + beneficiaries?.children;
  return (
    <>
    {/* <Box mb={50}>
    <SimpleGrid minChildWidth='120px' spacing='40px'>
    <Box height='160px'>
      <Stack spacing={3}>
       <BeneficiariesCard name="Men" total={beneficiaries?.men} color="#0090FF" icon={IoManSharp}/>
       <BeneficiariesCard name="Women" total={beneficiaries?.women} color="#FE3169" icon={IoWomanSharp}/>
      </Stack>  
    </Box>
    <Box height='120px'>
    <BigCard name="Total Beneficiaries" total={totalbeneficiaries} color="#FFA523" size="lg" icon={FaPeopleRoof} height={280}/>
    </Box>
    <Box height='120px'>
     <Stack spacing={3}>   
    <BeneficiariesCard name="Children" total={beneficiaries?.children} color="#A8CF45" icon={FaChildren}/>
    <BeneficiariesCard name="Households" total={beneficiaries?.children} color="#A8CF45" icon={FaHome}/>   
    </Stack>
    </Box>
    </SimpleGrid>
    </Box> */}

    <Box >
    <StateBeneficiaries />
    </Box>
    </>
  )
}

export default BeneficiariesPage