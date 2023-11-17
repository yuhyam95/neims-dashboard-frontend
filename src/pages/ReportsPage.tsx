import ReportsTable from "../components/ReportsTable"

import { reports } from "../constants/mockData"

const ReportsPage = () => {
  return (
    <ReportsTable reports={reports}/>
  )
}

export default ReportsPage  