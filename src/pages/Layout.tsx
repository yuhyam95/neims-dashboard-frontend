
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
} from '@chakra-ui/react'

import {
  FiHome,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUser,
  FiUsers,
  FiFile,
  FiTrendingUp
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import ProductCategory from './ProductCategory'
import BinCardPage from './BinCardPage'
import Dashboard from './Dashboard'
import StationPage from './StationPage'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import ReportsPage from './ReportsPage'
import SingleReport from './SingleReport'
import UserManagement from './UserManagement'
import BeneficiariesPage from './BeneficiariesPage'
import { useAuth } from '../context/AuthContext'
import StationDashboard from './StationDashboard'
import FinancialReport from './FinancialReport'

interface LinkItemProps {
  name: string
  icon: IconType,
  route?: string
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}



const LinkItems: Record<string, LinkItemProps[]> = {
  'Admin': [
    { name: 'Home', icon: FiHome, route: '/' },
    { name: 'Financial Report', icon: FiTrendingUp, route: '/financialreport' },
    { name: 'Disaster Reports', icon: FiFile, route: '/reports' },
    { name: 'Beneficiaries', icon: FiUsers, route: '/beneficiaries' },
    { name: 'User Management', icon: FiUser, route: '/usermanagement' },
  ],
  'DG': [
    { name: 'Home', icon: FiHome, route: '/' },
    { name: 'Financial Report', icon: FiTrendingUp, route: '/financialreport' },
    { name: 'Disaster Reports', icon: FiFile, route: '/reports' },
    { name: 'Beneficiaries', icon: FiUsers, route: '/beneficiaries' },
  ],
  'Director-Relief': [
    { name: 'Home', icon: FiHome, route: '/' },
    { name: 'Financial Report', icon: FiTrendingUp, route: '/financialreport' },
    { name: 'Disaster Reports', icon: FiFile, route: '/reports' },
    { name: 'Beneficiaries', icon: FiUsers, route: '/beneficiaries' },
  ],
  'Head-officer': [
    { name: 'Home', icon: FiHome, route: '/' },
    { name: 'Disaster Reports', icon: FiFile, route: '/reports' },
    { name: 'Beneficiaries', icon: FiUsers, route: '/beneficiaries' },
  ],
  'account-officer': [
    { name: 'Financial Report', icon: FiTrendingUp, route: '/financialreport' }
  ],
};

const SidebarContent: React.FC<SidebarProps & { userRole: string }> = ({ onClose, userRole, ...rest }) => {
  const userLinks = LinkItems[userRole] || [];

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          NEIMS
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {userLinks.map((link) => (
        <Link key={link.name} to={link.route || '#'}>
          <NavItem icon={link.icon}>{link.name}</NavItem>
        </Link>
      ))}
    </Box>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'teal',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};


const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const {user, logout} = useAuth()
  const navigate = useNavigate()
  

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      {...rest}>

      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Heading display={{ base: 'flex',}} size='lg'>NEMA Inventory Management System</Heading>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{user?.firstname} {user?.surname}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem onClick={() => {
                logout();
                navigate('/login')
              }}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const Layout = () => {
  const {user} = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const userRole = user?.role.name;
  
  return (
    <Box minH="100vh" bg={useColorModeValue('#f6f8fc', '#f6f8fc')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} userRole={userRole || ''}/>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} userRole='Super-admin'/>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Routes>
        <Route path="/"  
          element={userRole === 'Admin' ? <Dashboard /> : <StationDashboard /> }/>
        <Route path="/station" element={<StationPage />} />
        <Route path="/productcategory" element={<ProductCategory />} />
        <Route path="/bincardpage" element={<BinCardPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/singlereport" element={<SingleReport />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/beneficiaries" element={<BeneficiariesPage />} />
        <Route path="/financialreport" element={<FinancialReport />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default Layout