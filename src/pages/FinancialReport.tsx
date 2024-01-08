import { useEffect, useState } from 'react';

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
  HStack,
} from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import apiClient from '../services/api-client';
import TransactionCard from '../components/TransactionCard';
import moment from 'moment';
import { useAuth } from '../context/AuthContext';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'Income' | 'Expense';
  createdAt: string
}

const FinancialReport = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState<'Income' | 'Expense'>('Expense');
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {user} = useAuth()
  const userRole = user?.role.name;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionsResponse = await apiClient.get('/transaction');
        const transactionsData: Transaction[] = transactionsResponse.data;

        setTransactions(transactionsData);

        // Calculate total income, total expense, and balance
        const totalIncomeValue = transactionsData
          .filter((transaction) => transaction.type === 'Income')
          .reduce((total, transaction) => total + transaction.amount, 0);

        const totalExpenseValue = transactionsData
          .filter((transaction) => transaction.type === 'Expense')
          .reduce((total, transaction) => total + transaction.amount, 0);

        setTotalIncome(totalIncomeValue);
        setTotalExpense(totalExpenseValue);
        setBalance(totalIncomeValue - totalExpenseValue);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addTransaction = async () => {
    if (description && amount) {
      try {
        const response = await apiClient.post('/transaction', {
          description,
          amount: parseFloat(amount),
          type: transactionType,
        });

        const data: Transaction = response.data;

        setTransactions([...transactions, data]);
        setDescription('');
        setAmount('');

        if (transactionType === 'Income') {
          setTotalIncome((prevTotalIncome) => prevTotalIncome + data.amount);
          setBalance((prevBalance) => prevBalance + data.amount);
        } else {
          setTotalExpense((prevTotalExpense) => prevTotalExpense + data.amount);
          setBalance((prevBalance) => prevBalance - data.amount);
        }
      } catch (error) {
        console.error('Error adding transaction:', error);
      }
    }
  };

  const deleteTransaction = async (id: number, amount: number, type: 'Income' | 'Expense') => {
    try {
      await apiClient.delete(`/transaction/${id}`);

      const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
      setTransactions(updatedTransactions);

      if (type === 'Income') {
        setTotalIncome((prevTotalIncome) => prevTotalIncome - amount);
        setBalance((prevBalance) => prevBalance - amount);
      } else {
        setTotalExpense((prevTotalExpense) => prevTotalExpense - amount);
        setBalance((prevBalance) => prevBalance + amount);
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <>
    <Box p={4}>
        <HStack alignItems="center" justify='space-between' mb={4}>
        <Heading>Financial Overview</Heading>
        {userRole === 'account-officer' &&
          <Button leftIcon={<RiAddLine />} colorScheme='teal' variant='solid' size='sm' mr={8} onClick={onOpen}>
            Add Transaction
        </Button>}
        </HStack>

        <HStack mb={4} spacing={12} justify='center'>
          <TransactionCard description='Current Balance' total={balance.toFixed(2)} color='blue.500'/>
          <TransactionCard description='Total Income' total={totalIncome.toFixed(2)} color='green.500'/>
          <TransactionCard description='Total Expense' total={totalExpense.toFixed(2)} color='red.500'/>
        </HStack>
        
          <Heading as='h3'size='lg' mb={4}>Latest Transactions </Heading>
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
                <Text>Date: {moment(transaction.createdAt).format("MMMM Do YYYY")}</Text>
                {userRole === 'account-officer' &&
                  <Button
                  colorScheme="red"
                  size="sm"
                  mt={2}
                  onClick={() => deleteTransaction(transaction.id, transaction.amount, transaction.type)}
                >
                  Delete
                </Button>}
              </Box>
            ))}
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
  );
};

export default FinancialReport;
