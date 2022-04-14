import { useEffect, useState } from 'react';
import { User } from '../../store/user';

const useUserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          {
            method: 'GET',
          },
        );

        const results = (await response.json()) as User[];
        setUsers(results);
      } catch (e) {
        console.error(e);
      }
    };
    void getUsers();
  }, []);

  return {
    users,
  };
};

export default useUserList;
