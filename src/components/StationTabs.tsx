// import { Tab, TabList, Tabs } from "@chakra-ui/react"
// import { useState } from "react"
// import useStation, { Station } from "../hooks/useStation"


// interface Props {
//     onSelectStation: (station: Station) => void;
//     sele
// }

// const StationTabs = ({onSelectStation}: Props) => {
    
//     const {data} = useStation()
//     const [selectedTab, setSelectedTab] = useState('')
  
  
//     return (
//         <Tabs variant='unstyled' align="center" bg="white" borderRadius="10px" width="50%" defaultIndex={0}>
//         <TabList>
//           <Tab _selected={{ color: 'blue.500', bg: 'gray.100', fontStyle: 'bold' }}
//              onClick={() => setSelectedTab('Territorial')}
//                 >Territorial Offices</Tab>
//           <Tab _selected={{ color: 'blue.500', bg: 'gray.100' }}  onClick={() => setSelectedTab('Zonal')} >Zonal Offices</Tab>
//           <Tab _selected={{ color: 'blue.500', bg: 'gray.100' }}  onClick={() => setSelectedTab('Operational')}>Operational Offices</Tab>
//         </TabList>
//       </Tabs>
//   )
// }

// export default StationTabs


import { Tab, TabList, Tabs } from '@chakra-ui/react';

const StationTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <Tabs variant='unstyled' align="center" bg="white" borderRadius="10px" width="50%" defaultIndex={0}>
      <TabList>
        <Tab
          _selected={{ color: 'blue.500', bg: 'gray.100', fontStyle: 'bold' }}
          onClick={() => setSelectedTab('Territorial')}
        >
          Territorial Offices
        </Tab>
        <Tab
          _selected={{ color: 'blue.500', bg: 'gray.100' }}
          onClick={() => setSelectedTab('Zonal')}
        >
          Zonal Offices
        </Tab>
        <Tab
          _selected={{ color: 'blue.500', bg: 'gray.100' }}
          onClick={() => setSelectedTab('Operational')}
        >
          Operational Offices
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default StationTabs;
