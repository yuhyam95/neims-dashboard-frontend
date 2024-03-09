// import React from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { ApexOptions } from 'apexcharts';

// interface Product {
//   station: {
//     name: string;
//   };
//   quantity: number;
// }

// interface ChartProps {
//   productData: Product[]; 
// }

// const ColumnChart: React.FC<ChartProps> = ({ productData }) => {
  
//   const aggregatedData: Record<string, number> = {};
//   productData.forEach(product => {
//     const stationName = product.station.name;
//     if (aggregatedData[stationName]) {
//       aggregatedData[stationName] += product.quantity;
//     } else {
//       aggregatedData[stationName] = product.quantity;
//     }
//   });

//   // Prepare data for chart
//   const chartData = Object.entries(aggregatedData).map(([station, quantity]) => ({
//     x: station,
//     y: quantity,
//   }));

//   // Define the chart options
//   const chartOptions: ApexOptions = {
//     chart: {
//       type: 'bar',
//       height: 350,
//       background: 'white',
//       width: "80%"
//     },
//     xaxis: {
//       categories: chartData.map(dataPoint => dataPoint.x),
//     },
//     yaxis: {
//       title: {
//         text: 'Total Items',
//       },
//     },
//     plotOptions: {
//         bar: {
//           //borderRadius: 10,
//         },
//       },
//   };

//   return (
//     <div>
//       <ReactApexChart
//         options={chartOptions}
//         series={[
//           {
//             name: 'Total Quantity',
//             data: chartData.map(dataPoint => dataPoint.y),
//           },
//         ]}
//         type="bar"
//         height={350}
//       />
//     </div>
//   );
// };

// export default ColumnChart;

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

  // Prepare data for chart
  const chartData = categories.map(category => ({
    name: category,
    data: stations.map(station => aggregatedData[category][station] || 0),
  }));

  // Define the chart options
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
    colors: ['#FF5733', '#33FF57', '#5733FF', '#FF33A6', '#33A6FF'],
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
