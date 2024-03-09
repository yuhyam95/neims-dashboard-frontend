
import { Tab, TabList, Tabs } from '@chakra-ui/react';

interface Props {
  selectedTab: string,
  setSelectedTab: any
}

const StationTabs = ({ setSelectedTab }: Props) => {
  return (
    <Tabs variant='unstyled' align="center" bg="white" borderRadius="10px" width="50%" defaultIndex={0}>
      <TabList>
      <Tab
          _selected={{ color: 'blue.500', bg: 'gray.100', fontStyle: 'bold' }}
          onClick={() => setSelectedTab('Overview')}
        >
          Overview
        </Tab>
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
