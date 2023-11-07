// import useData from "./useData";


// export interface Station {
//     id: number;
//     name: string;
//     type: string;
//     total: number;
//     category: Category[];
//     change: string;
//     productList: ProductList[];
//     beneficiaries: Beneficiaries[];
//   }
  
//   interface Category{
//     id: number;
//     name: string,
//     total: number,
//     color: string
//   }

//   interface ProductList{
//     id: number;
//     name: string,
//     quantity: number,
//     tag: Boolean
//   }

//   interface Beneficiaries {
//     id: number;
//     gender: string, 
//     location: string
//   }

//   const useStation = () => useData<Station>('/station')
  
//   export default useStation;

import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import stationService, { Station } from "../services/station-service";

const useStations = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = stationService.getAll<Station>();
    request
      .then((res) => {
        setStations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { stations, error, isLoading, setStations, setError };
}

export default useStations;
