

import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import stationService, { Station } from "../services/station-service";

const useStations = (queryParams = {}) => {
  const [stations, setStations] = useState<Station[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = stationService.getAll<Station>(queryParams);
    request
      .then((res) => {
        setStations(res.data);
        console.log(res.data)
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [queryParams]);

  return { stations, error, isLoading, setStations, setError };
}

export default useStations;
