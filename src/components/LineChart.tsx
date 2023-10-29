
import { Card, Spinner } from '@chakra-ui/react';
import React from 'react';
import { Chart } from 'react-google-charts';

interface StateData {
  id: number;
  state: string;
  months: {
    id: number;
    name: string;
    total: number;
  }[];
}

interface LineChartProps {
  data: StateData[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = [['Month', ...data.map((stateData) => stateData.state)]];

  // Create rows for each month with the total values
  data[0].months.forEach((monthData) => {
    const rowData = [monthData.name];
    data.forEach((stateData) => {
      const stateMonth = stateData.months.find((month) => month.name === monthData.name);
      rowData.push(stateMonth ? stateMonth.total : 0);
    });
    chartData.push(rowData);
  });

  const chartOptions = {
    title: 'Station Stock Graph',
    chartArea: {borderRadius: 20},
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Total',
    },
    curveType: 'function', 
  };

  return (
    <Chart
      width={'100%'}
      height={'300px'}
      chartType="LineChart"
      loader={<Spinner />}
      data={chartData}
      options={chartOptions}
    />
  );
};

export default LineChart;
