import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Chart } from 'react-google-charts';

interface StateData {
  id: number;
  state: string;
  months: {
    id: number;
    name: string;
    total: number;
    beneficiaries: {
      men: number;
      women: number;
      children: number;
    };
  }[];
}

interface MonthlyBeneficiariesChartProps {
  data: StateData[];
}

const MonthlyBeneficiariesChart: React.FC<MonthlyBeneficiariesChartProps> = ({ data }) => {
 
  const monthlyData = data[0].months.map((month) => ({
    month: month.name,
    men: data.reduce((acc, stateData) => acc + (stateData.months.find((m) => m.name === month.name)?.beneficiaries?.men || 0), 0),
    women: data.reduce((acc, stateData) => acc + (stateData.months.find((m) => m.name === month.name)?.beneficiaries?.women || 0), 0),
    children: data.reduce((acc, stateData) => acc + (stateData.months.find((m) => m.name === month.name)?.beneficiaries?.children || 0), 0),
  }));
  

  const chartData = [['Month', 'Men', 'Women', 'Children'], ...monthlyData.map((monthData) => [monthData.month, monthData.men, monthData.women, monthData.children])];

  const chartOptions = {
    title: 'Monthly Beneficiaries',
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Beneficiaries',
    },
    legend: { position: 'top' }
  };

  return (
    <Chart
      width={'100%'}
      height={'300px'}
      chartType="ColumnChart"
      loader={<Spinner />}
      data={chartData}
      options={chartOptions}
    />
  );
};

export default MonthlyBeneficiariesChart;
