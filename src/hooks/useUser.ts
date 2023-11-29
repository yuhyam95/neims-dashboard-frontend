import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User, createUser } from "../services/user-service";


const useUser = (queryParams = {}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [createError, setCreateError] = useState("")
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
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
  }, []);

  const createUser = async (newUserData: createUser) => {
    try {
      setLoading(true);
      const response = await userService.create<createUser>(newUserData);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setSuccess(true);
      setLoading(false);
    } catch (err: any) {
      if (err instanceof CanceledError) return;
      setCreateError(err.message);
      setLoading(false);
    }
  };

  const updateUser = async (updatedUserData: createUser) => {
    try {
      setLoading(true);
      const response = await userService.update<createUser>(updatedUserData);
      const updatedUser = response.data;

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        )
      );
      setSuccess(true);
      setLoading(false);
    } catch (err: any) {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    }
  };
  
  const resetSuccess = () => {
    setSuccess(false);
  };

  return { users, error, createError, isLoading, setUsers, setError, createUser, success, resetSuccess, updateUser };
}

export default useUser;
