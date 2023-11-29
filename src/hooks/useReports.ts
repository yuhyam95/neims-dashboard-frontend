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

//   const createReport = async (newReportData: createReport) => {
//     try {
//       setLoading(true);
//       const response = await reportService.create<createReport>(newReportData);
//       setReports((prevReports) => [...prevReports, response.data]);
//       setSuccess(true);
//       setLoading(false);
//     } catch (err: any) {
//       if (err instanceof CanceledError) return;
//       setCreateError(err.message);
//       setLoading(false);
//     }
//   };

//   const updateReport = async (updatedReportData: createReport) => {
//     try {
//       setLoading(true);
//       const response = await reportService.update<createReport>(updatedReportData);
//       const updatedReport = response.data;

//       setReports((prevReports) =>
//         prevReports.map((report) =>
//           report._id === updatedReport._id ? updatedReport : report
//         )
//       );
//       setSuccess(true);
//       setLoading(false);
//     } catch (err: any) {
//       if (err instanceof CanceledError) return;
//       setError(err.message);
//       setLoading(false);
//     }
//   };
  
  const resetSuccess = () => {
    setSuccess(false);
  };

  return { reports, error, createError, isLoading, setReports, setError, success, resetSuccess };
}

export default useReports;
