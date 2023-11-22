// import React from 'react';
// import Chart from 'react-apexcharts';

// interface ProductData {
//   station: {
//     _id: string;
//     name: string;
//     type: string;
//   };
//   createdAt: string;
//   quantity: number;
// }

// interface StationChartData {
//   name: string;
//   data: number[];
// }

// interface LineChartProps {
//   data: ProductData[];
// }

// const LineChart: React.FC<LineChartProps> = ({ data }) => {
//   // Extracting month and year from createdAt field
//   const getMonthYear = (createdAt: string) => {
//     const date = new Date(createdAt);
//     return `${date.getMonth() + 1}/${date.getFullYear()}`;
//   };

//   // Grouping data by station and month
//   const groupedData: { [key: string]: StationChartData } = {};

//   // data.forEach(product => {
//   //   const { station, createdAt, quantity } = product;
//   //   const monthYear = getMonthYear(createdAt);

//   //   if (!groupedData[station.name]) {
//   //     groupedData[station.name] = {
//   //       name: station.name,
//   //       data: [],
//   //     };
//   //   }

//   //   const stationData = groupedData[station.name];
//   //   const index = stationData.data.findIndex(entry => entry[0] === monthYear);

//   //   if (index !== -1) {
//   //     stationData.data[index][1] += quantity;
//   //   } else {
//   //     stationData.data.push([monthYear, quantity]);
//   //   }
//   // });
  
//   data.forEach(product => {
//     const { station, createdAt, quantity } = product;
//     const monthYear = getMonthYear(createdAt);
  
//     if (!groupedData[station.name]) {
//       groupedData[station.name] = {
//         name: station.name,
//         data: [] as Array<[string, number]>, // Explicitly define the type here
//       };
//     }
  
//     const stationData = groupedData[station.name];
//     const index = stationData.data.findIndex(
//       entry => entry[0] === monthYear
//     );
  
//     if (index !== -1) {
//       stationData.data[index][1] += quantity;
//     } else {
//       stationData.data.push([monthYear, quantity]);
//     }
//   });
  
  
//   const chartData = {
//     options: {
//       chart: {
//         stacked: false,
//         background: '#fff',
//         borderRadius: 8,
//         toolbar: {
//           show: false,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       xaxis: {
//         type: 'category' as const,
//         categories: Array.from(
//           new Set(data.map(product => getMonthYear(product.createdAt)))
//         ),
//       },
//       yaxis: {
//         title: {
//           text: 'Total Quantity',
//         },
//       },
//       title: {
//         text: 'Product Quantity by Station and Month',
//         align: 'left' as const,
//       },
//     },
//     series: Object.values(groupedData).map(stationData => ({
//       name: stationData.name,
//       data: stationData.data,
//     })),
//   };

//   const chartStyle = {
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   };

//   return (
//     <Chart
//       options={chartData.options}
//       series={chartData.series}
//       type="area"
//       height={300}
//       style={chartStyle}
//     />
//   );
// };

// export default LineChart;

import React from 'react';
import Chart from 'react-apexcharts';

interface ProductData {
  station: {
    id: string;
    name: string;
    type: string;
  };
  createdAt: string;
  quantity: number;
}

interface StationChartData {
  name: string;
  data: Array<[string, number]>;
}

interface LineChartProps {
  data: ProductData[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const getMonthYear = (createdAt: string): string => {
    const date = new Date(createdAt);
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const groupedData: { [key: string]: StationChartData } = {};

  data.forEach(product => {
    const { station, createdAt, quantity } = product;
    const monthYear = getMonthYear(createdAt);

    if (!groupedData[station.name]) {
      groupedData[station.name] = {
        name: station.name,
        data: [] as Array<[string, number]>,
      };
    }

    const stationData = groupedData[station.name];
    const index = stationData.data.findIndex(
      entry => entry[0] === monthYear
    );

    if (index !== -1) {
      stationData.data[index][1] += quantity;
    } else {
      stationData.data.push([monthYear, quantity]);
    }
  });

  const chartData = {
    options: {
      chart: {
        stacked: false,
        background: '#fff',
        borderRadius: 8,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'category' as const,
        categories: Array.from(
          new Set(data.map(product => getMonthYear(product.createdAt)))
        ),
      },
      yaxis: {
        title: {
          text: 'Total Quantity',
        },
      },
      title: {
        text: 'Product Quantity by Station and Month',
        align: 'left' as const,
      },
    },
    series: Object.values(groupedData).map(stationData => ({
      name: stationData.name,
      data: stationData.data,
    })),
  };

  const chartStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="area"
      height={300}
      style={chartStyle}
    />
  );
};

export default LineChart;
