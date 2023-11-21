import { SimpleGrid } from "@chakra-ui/react"
import BeneficiariesCard from "./BeneficiariesCard"
import StateBeneficiaries from "./StateBeneficiaries"

const states = [
    {
    id: 1,
    name: "Abia",
    },
    {
        id: 2,
        name: "Adamawa",
    },
    {
        id: 3,
        name: "Akwa Ibom",
    },
    {
        id: 4,
        name: "Anambra",
    },
    {
        id: 5,
        name: "Bauchi",
    },
    {
        id: 6,
        name: "Bayelsa",
    },
    {
        id: 7,
        name: "Benue",
    },
    {
        id: 8,
        name: "Borno",
    },
    {
    id: 9,
    name: "Cross-river",
    },
    {
        id: 10,
        name: "Delta",
    },
    {
        id: 11,
        name: "Ebonyi",
    },
    {
        id: 12,
        name: "Edo",
    },
    {
    id: 13,
    name: "Ekiti",
    },
    {
        id: 14,
        name: "Enugu",
    },
    {
        id: 15,
        name: "Gombe",
    },
    {
        id: 16,
        name: "Imo",
    },
    {
        id: 17,
        name: "Jigawa",
    },
    {
        id: 18,
        name: "Kaduna",
    },
    {
        id: 19,
        name: "Kano",
    },
    {
        id: 20,
        name: "Katsina",
    },
    {
    id: 21,
    name: "Kebbi",
    },
    {
        id: 22,
        name: "Kogi",
    },
    {
        id: 23,
        name: "Kwara",
    },
    {
        id: 24,
        name: "Lagos",
    },
    {
    id: 25,
    name: "Nasarawa",
    },
    {
        id: 26,
        name: "Niger",
    },
    {
        id: 27,
        name: "Ogun",
    },
    {
        id: 28,
        name: "Ondo",
    },
    {
        id: 29,
        name: "Osun",
    },
    {
        id: 30,
        name: "Oyo",
    },
    {
        id: 31,
        name: "Plateau",
    },
    {
        id: 32,
        name: "Rivers",
    },
    {
        id: 33,
        name: "Sokoto",
    },
    {
        id: 34,
        name: "Taraba",
    },
    {
        id: 35,
        name: "Yobe",
    },
    {
        id: 36,
        name: "Zamfara",
    },
    {
        id: 37,
        name: "FCT",
    },
]

const BeneficiariesGrid = () => {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} padding="10px" spacing={6}>
      {states?.map((state) => (
        <StateBeneficiaries state={state.name}/>
      ))}
    </SimpleGrid> 
  )
}

export default BeneficiariesGrid