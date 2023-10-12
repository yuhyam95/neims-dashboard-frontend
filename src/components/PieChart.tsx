import React from 'react';
import { Chart } from 'react-google-charts';

interface PieChartProps {
  warehouseData: WarehouseItem[];
}

interface WarehouseItem {
  id: number;
  category: string;
  color: string;
  total: number;
}

const PieChart: React.FC<PieChartProps> = ({ warehouseData }) => {
  const data = [['Category', 'Total']];
  warehouseData.forEach((item) => {
    data.push([item.category, item.total]);
  });

  return (
    <Chart
      width={'70%'}
      height={'150px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        colors: warehouseData.map((item) => item.color),
        legend: 'none',
        chartArea: {
          left: 0, // Adjust the left padding
          top: 0, // Adjust the top padding
          width: '100%', // Set the width to 100% to remove right padding
          height: '100%', // Set the height to 100% to remove bottom padding
        },
        padding: 0
      }}
    />
  );
};

export default PieChart;
