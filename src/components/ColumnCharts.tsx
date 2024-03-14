import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface Product {
  station: {
    name: string;
  };
  quantity: number;
  category: {
    name: string;
  };
}

interface ChartProps {
  productData: Product[];
}

const StackedColumnChart: React.FC<ChartProps> = ({ productData }) => {
  const aggregatedData: Record<string, Record<string, number>> = {};

  productData.forEach(product => {
    const stationName = product.station.name;
    const categoryName = product.category.name;

    if (!aggregatedData[categoryName]) {
      aggregatedData[categoryName] = {};
    }

    if (aggregatedData[categoryName][stationName]) {
      aggregatedData[categoryName][stationName] += product.quantity;
    } else {
      aggregatedData[categoryName][stationName] = product.quantity;
    }
  });

  const categories = Object.keys(aggregatedData);
  const stations = Array.from(
    new Set(productData.map(product => product.station.name))
  );

  const chartData = categories.map(category => ({
    name: category,
    data: stations.map(station => aggregatedData[category][station] || 0),
  }));

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      background: 'white',
      stacked: true,
      width: '80%',
    },
    xaxis: {
      categories: stations,
    },
    yaxis: {
      title: {
        text: 'Total Items',
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    colors: ['#049FCB', '#FF6347', '#00B5B0', '#FFA523', '#9F48A6'],
    dataLabels: {
      enabled: false, // Hide data labels
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartData}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default StackedColumnChart;
