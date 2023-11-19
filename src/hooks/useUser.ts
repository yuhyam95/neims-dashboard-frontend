import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../services/user-service";


const useUser = (queryParams = {}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>(queryParams);
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [queryParams]);

  const createUser = async (newUserData: User) => {
    try {
      setLoading(true);
      const response = await userService.create<User>(newUserData);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setLoading(false);
    } catch (err: any) {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    }
  };

  return { users, error, isLoading, setUsers, setError, createUser };
}

export default useUser;
