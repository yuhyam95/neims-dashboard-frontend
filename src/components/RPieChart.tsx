// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
// import data from '../constants/mockData'; // Import your data from the data file

// const COLORS = data[0].warehouse.map((item) => item.color);

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
//   const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       fontSize="12"
//       dominantBaseline="central"
//       textAnchor="middle"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// const PieChartWithCustomizedLabel = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <PieChart>
//         <Pie
//           data={data[0].warehouse}
//           dataKey="total"
//           nameKey="category"
//           cx="50%"
//           cy="50%"
//           outerRadius={80}
//           label={renderCustomizedLabel}
//         >
//           {data[0].warehouse.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default PieChartWithCustomizedLabel;


import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { WarehouseItem } from '../constants/mockData'; // Import your data and the WarehouseItem type

const data: WarehouseItem[] = [
  {
    id: 1,
    category: "Food Items",
    color: "#FFA523",
    total: 150000,
  },
  {
    id: 2,
    category: "Non-Food Items",
    color: "#FE3169",
    total: 100000,
  },
  {
    id: 3,
    category: "Livelihood",
    color: "#00B5B0",
    total: 80000,
  },
  {
    id: 4,
    category: "Agro-Chemical",
    color: "#9F48A6",
    total: 130000,
  },
  {
    id: 5,
    category: "Building Materials",
    color: "#049FCB",
    total: 50000,
  },
];

const COLORS = data.map((item) => item.color);

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize="12"
      dominantBaseline="central"
      textAnchor="middle"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const RPieChart = () => {
  return (
    <ResponsiveContainer width="50%" height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="total"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RPieChart;
