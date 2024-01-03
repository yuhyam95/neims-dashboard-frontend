import { useState } from 'react';

import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

interface Transaction {
    id: number;
    description: string;
    amount: number;
    type: 'Income' | 'Expense';
  }

const FinancialReport = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState<'Income' | 'Expense'>('Expense');
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [balance, setBalance] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const addTransaction = () => {
      if (description && amount) {
        const newTransaction: Transaction = {
          id: transactions.length + 1,
          description,
          amount: parseFloat(amount),
          type: transactionType,
        };
  
        setTransactions([...transactions, newTransaction]);
        setDescription('');
        setAmount('');
  
        if (transactionType === 'Income') {
          setTotalIncome((prevTotalIncome) => prevTotalIncome + newTransaction.amount);
          setBalance((prevBalance) => prevBalance + newTransaction.amount);
        } else {
          setTotalExpense((prevTotalExpense) => prevTotalExpense + newTransaction.amount);
          setBalance((prevBalance) => prevBalance - newTransaction.amount);
        }
      }
    };
  
    const deleteTransaction = (id: number, amount: number, type: 'Income' | 'Expense') => {
      const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
      setTransactions(updatedTransactions);
  
      if (type === 'Income') {
        setTotalIncome((prevTotalIncome) => prevTotalIncome - amount);
        setBalance((prevBalance) => prevBalance - amount);
      } else {
        setTotalExpense((prevTotalExpense) => prevTotalExpense - amount);
        setBalance((prevBalance) => prevBalance + amount);
      }
    };
  
  
    return (
    <>
    <Box p={4}>
        <Heading mb={4}>Financial Report</Heading>
        <Button leftIcon={<RiAddLine />} colorScheme='teal' variant='solid' size='sm' mr={8} onClick={onOpen}>
            Add Transaction
        </Button>
        <VStack spacing={4} align="stretch">
          <Text fontWeight="bold" fontSize="xl" mt={4}>
            Total Income: ₦{totalIncome.toFixed(2)}
          </Text>
          <Text fontWeight="bold" fontSize="xl" mt={4}>
            Total Expense: ₦{totalExpense.toFixed(2)}
          </Text>
          <Text fontWeight="bold" fontSize="xl" mt={4}>
            Current Balance: ₦{balance.toFixed(2)}
          </Text>

          <VStack align="stretch">
            {transactions.map((transaction) => (
              <Box
                key={transaction.id}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                bg={transaction.type === 'Income' ? 'green.100' : 'red.100'}
              >
                <Text fontSize="lg">{transaction.description}</Text>
                <Text fontWeight="bold">₦{transaction.amount.toFixed(2)}</Text>
                <Text>Type: {transaction.type}</Text>
                <Button
                  colorScheme="red"
                  size="sm"
                  mt={2}
                  onClick={() => deleteTransaction(transaction.id, transaction.amount, transaction.type)}
                >
                  Delete
                </Button>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <VStack spacing={2}>
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Select
              placeholder="Select transaction type"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value as 'Income' | 'Expense')}
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </Select>
            <Button colorScheme="teal" onClick={addTransaction}>
              Add Transaction
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
    )
}

export default FinancialReport