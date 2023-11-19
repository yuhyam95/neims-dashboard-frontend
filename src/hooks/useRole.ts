import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import roleService, { Role } from "../services/role-service";


const useRole = (queryParams = {}) => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = roleService.getAll<Role>(queryParams);
    request
      .then((res) => {
        setRoles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [queryParams]);

  const createRole = async (newRoleData: Role) => {
    try {
      setLoading(true);
      const response = await roleService.create<Role>(newRoleData);
      setRoles((prevRoles) => [...prevRoles, response.data]);
      setLoading(false);
    } catch (err: any) {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    }
  };

  return { roles, error, isLoading, setRoles, setError, createRole };
}

export default useRole;
