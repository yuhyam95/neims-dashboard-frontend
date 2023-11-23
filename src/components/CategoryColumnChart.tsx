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

const CategoryHorizontalBarChart: React.FC<ChartProps> = ({ station }) => {
  // Prepare data for chart
  const chartData = station?.category.map(category => ({
    y: category.name,
    x: category.total,
    color: category.color,
  }));

  // Define the chart options
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 300,
      background: 'white',
      width: '25%',
    },
    yaxis: {
      title: {
        text: 'Categories', 
      },
    },
    xaxis: {
      title: {
        text: 'Total Quantities', 
      },
      type: 'category', 
      categories: chartData?.map(dataPoint => dataPoint.y),
    },
    plotOptions: {
      bar: {
        horizontal: true, 
        columnWidth: '50%', 
        //borderRadius: 10,
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
            data: chartData?.map(dataPoint => dataPoint.x),
          },
        ]}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default CategoryHorizontalBarChart;
