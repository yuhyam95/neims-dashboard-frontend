
import StateGrid from './StateGrid';
import data from '../constants/mockData'

interface StateData {
  id: number;
  state: string;
  warehouse: WarehouseItem[];
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
    </div>
  );
}

export default Body;
