import { HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import ReportsTable from "../components/ReportsTable"
import CreateReport from "../components/CreateReport";
import useReports from "../hooks/useReports";

const ReportsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { reports } = useReports('')
  return (
    <>
    <HStack justify='space-between'>
    <Heading mb={4} ml={4}> Reports </Heading>
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