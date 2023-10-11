import { Chart } from "react-google-charts";

export const data = [
  ["Category", "Numbers"],
  ["Food Items", 11],
  ["Non-Food Items", 2],
  ["Livelihood", 2],
  ["Agro-Chemicals", 2],
  ["Building Materials", 7],
];

export const options = {
  legend: 'none',
  colors: ['#FFA523', '#FE3169', '#00B5B0', '#9F48A6', '#049FCB']
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
}
