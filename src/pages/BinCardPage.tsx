import { useLocation } from "react-router-dom"
import BinCard from "../components/BinCard"

const BinCardPage = () => {

  const location = useLocation()
  const {BinCardData, name, quantity} = location.state
   
  return (
    <BinCard bincard={BinCardData} name={name} quantity={quantity}/>
  )
}

export default BinCardPage