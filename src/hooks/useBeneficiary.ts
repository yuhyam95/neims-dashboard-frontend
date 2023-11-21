import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import beneficiariesService, { Beneficiaries } from "../services/beneficiary-service";

const useBeneficiaries = (queryParams = {}) => {
  
  const [beneficiaries, setBeneficiaries] = useState<Beneficiaries[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = beneficiariesService.getAll<Beneficiaries>(queryParams);
    request
      .then((res) => {
        setBeneficiaries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [queryParams]);

  return { beneficiaries, error, isLoading, setBeneficiaries, setError };
}

export default useBeneficiaries;
