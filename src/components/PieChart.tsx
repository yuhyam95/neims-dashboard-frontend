
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface PieChartProps {
  categoryData: CategoryItem[];
}

interface CategoryItem {
  _id: string;
  name: string;
  color: string;
  total: number;
}

const PieChart: React.FC<PieChartProps> = ({ categoryData }) => {
  const options = {
    labels: categoryData.map((item) => item.name),
    colors: categoryData.map((item) => item.color),
    legend: {
      show: false, 
    },
  };

  const series = categoryData.map((item) => item.total);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      width="100%"
      height={210}
    />
  );
};

export default PieChart;

