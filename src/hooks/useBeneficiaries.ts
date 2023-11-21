import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import beneficiariesService, { Beneficiary } from "../services/beneficiary-service";

const useBeneficiaries = (queryParams = {}) => {
  
  const [beneficiariesData, setBeneficiariesData] = useState<Beneficiary | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { objrequest, cancel } = beneficiariesService.getAll<Beneficiary>(queryParams);
    objrequest
      .then((res) => {
        setBeneficiariesData(res.data);
        setLoading(false); 
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [queryParams]);

  return { beneficiariesData, error, isLoading, setBeneficiariesData, setError };
}

export default useBeneficiaries;
