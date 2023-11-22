import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface Category {
  name: string;
  total: number;
  color: string;
}

interface Station {
  _id: string;
  name: string;
  type: string;
  total: number;
  category: Category[];
}

interface ChartProps {
  station: Station
}

const CategoryColumnChart: React.FC<ChartProps> = ({ station }) => {
  // Prepare data for chart
  const chartData = station?.category.map(category => ({
    x: category.name,
    y: category.total,
    color: category.color,
  }));

  // Define the chart options
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories: chartData?.map(dataPoint => dataPoint.x),
    },
    yaxis: {
      title: {
        text: 'Total',
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '50%', // Adjust column width as needed
        borderRadius: 10,
        colors: {
          ranges: chartData?.map(dataPoint => ({
            color: dataPoint.color,
          })),
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={[
          {
            name: 'Total',
            data: chartData?.map(dataPoint => dataPoint.y),
          },
        ]}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default CategoryColumnChart;
