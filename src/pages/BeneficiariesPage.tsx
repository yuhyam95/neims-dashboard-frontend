import { Box, HStack, Heading, SimpleGrid } from "@chakra-ui/react";
import useBeneficiaries from "../hooks/useBeneficiaries"
import BeneficiariesCard from "../components/BeneficiariesCard";
import { IoManSharp, IoWomanSharp } from "react-icons/io5";
import { FaChildren, FaPeopleRoof } from "react-icons/fa6";
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
    <Box>
      <HStack>
      <Heading margin={4}>Beneficiaries</Heading>    
      </HStack>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }} spacing={6}>
       <BeneficiariesCard name="Men" total={beneficiariesData?.men} color="#0090FF" icon={IoManSharp}/>
       <BeneficiariesCard name="Women" total={beneficiariesData?.women} color="#FE3169" icon={IoWomanSharp}/>
       <BeneficiariesCard name="Children" total={beneficiariesData?.children} color="#A8CF45" icon={FaChildren}/>
       <BeneficiariesCard name="Total Beneficiaries" total={totalbeneficiaries} color="#FFA523" size="lg" icon={FaPeopleRoof} />
    </SimpleGrid>
    </Box>
    <Heading margin={5} size='md'>Beneficiaries by States</Heading>
    <BeneficiariesGrid />
    </>
  )
}

export default BeneficiariesPage