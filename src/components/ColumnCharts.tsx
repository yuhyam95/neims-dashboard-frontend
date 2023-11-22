import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface Product {
  station: {
    name: string;
  };
  quantity: number;
}

interface ChartProps {
  productData: Product[];
}

const ColumnChart: React.FC<ChartProps> = ({ productData }) => {
  
  const aggregatedData: Record<string, number> = {};
  productData.forEach(product => {
    const stationName = product.station.name;
    if (aggregatedData[stationName]) {
      aggregatedData[stationName] += product.quantity;
    } else {
      aggregatedData[stationName] = product.quantity;
    }
  });

  // Prepare data for chart
  const chartData = Object.entries(aggregatedData).map(([station, quantity]) => ({
    x: station,
    y: quantity,
  }));

  // Define the chart options
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      background: 'white',
      width: "80%"
    },
    xaxis: {
      categories: chartData.map(dataPoint => dataPoint.x),
    },
    yaxis: {
      title: {
        text: 'Total Products',
      },
    },
    plotOptions: {
        bar: {
          borderRadius: 10,
        },
      },
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={[
          {
            name: 'Total Quantity',
            data: chartData.map(dataPoint => dataPoint.y),
          },
        ]}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
