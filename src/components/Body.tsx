
import StateGrid from './StateGrid';
import data from '../constants/mockData'
import LineChart from './LineChart';

interface StateData {
  id: number;
  state: string;
  warehouse: WarehouseItem[];
  months: MonthItem[]
}
interface MonthItem {
  id: number,
  name: string,
  total: number
}
interface WarehouseItem {
  id: number;
  category: string;
  color: string;
  total: number;
}

function Body() {
  return (
    <div>
      <StateGrid stateData={data} /> 
      <LineChart data={data} />
    </div>
  );
}

export default Body;
