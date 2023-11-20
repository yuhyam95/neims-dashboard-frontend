

import React from 'react';
import Chart from 'react-apexcharts';
import data from '../constants/mockData';

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

const LineChart: React.FC<LineChartProps> = () => {
  const chartData = {
    options: {
      chart: {
        stacked: false,
        background: '#fff',
        borderRadius: 8, // Set border radius
        toolbar: {
          show: false, // Hide the chart toolbar if needed
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'category' as const, // Explicitly set the type
        categories: data[0].months.map(monthData => monthData.name),
      },
      yaxis: {
        title: {
          text: 'Total',
        },
      },
      title: {
        text: 'Station Stock Graph',
        align: 'left' as const,
      },
    },
    series: data.map(stateData => ({
      name: stateData.state,
      data: stateData.months.map(month => month.total),
    })),
  };

  const chartStyle = {
    borderRadius: '8px',
    //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Set box shadow
  };

  return <Chart options={chartData.options} series={chartData.series} type="area" height={350} style={chartStyle}/>;
};

export default LineChart;
