import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import reportService, { Report, } from "../services/report-service";


const useReports = (queryParams = {}) => {
  const [reports, setReports] = useState<Report[]>([]);
  const [error, setError] = useState("");
  const [createError, setCreateError] = useState("")
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = reportService.getAll<Report>(queryParams);
    request
      .then((res) => {
        setReports(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);

      });

    return () => cancel();
  }, []);

  
  const resetSuccess = () => {
    setSuccess(false);
  };

  return { reports, error, createError, isLoading, setReports, setError, success, resetSuccess, setCreateError };
}

export default useReports;
