// import { Spinner } from '@chakra-ui/react';
// import React from 'react';
// import { Chart } from 'react-google-charts';

// interface PieChartProps {
//   categoryData: CategoryItem[];
// }

// interface CategoryItem {
//   id: number;
//   name: string;
//   color: string;
//   total: number;
// }

// const PieChart: React.FC<PieChartProps> = ({ categoryData }) => {
//   const data = [['Category', 'Total']];
//   categoryData.forEach((item) => {
//     data.push([item.name, item.total]);
//   });

//   return (
//     <Chart
//       width={'70%'}
//       height={'150px'}
//       chartType="PieChart"
//       loader={<Spinner />}
//       data={data}
//       options={{
//         colors: categoryData.map((item) => item.color),
//         legend: 'none',
//         chartArea: {
//           left: 0, // Adjust the left padding
//           top: 0, // Adjust the top padding
//           width: '100%', // Set the width to 100% to remove right padding
//           height: '100%', // Set the height to 100% to remove bottom padding
//         },
//         padding: 0
//       }}
//     />
//   );
// };

// export default PieChart;

import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface PieChartProps {
  categoryData: CategoryItem[];
}

interface CategoryItem {
  id: number;
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

