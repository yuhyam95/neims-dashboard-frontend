import { Button, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import ReportsTable from "../components/ReportsTable"
import { FaPlus } from "react-icons/fa";
import { reports } from "../constants/mockData"
import CreateReport from "../components/CreateReport";

const ReportsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <HStack justify='space-between'>
    <Heading mb={4} ml={4}> Reports </Heading>
    <Button leftIcon={<FaPlus />} colorScheme='teal' variant='solid' onClick={onOpen}>
      Create Report
    </Button>
    </HStack>
    <ReportsTable reports={reports}/>
    <Modal isOpen={isOpen} onClose={onClose} size='4xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <CreateReport />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ReportsPage  