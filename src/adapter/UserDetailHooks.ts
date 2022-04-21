import { useEffect, useState } from 'react';
import { User, initUser } from '../domain/model/user';

const useUserDetail = (id: number) => {
  const [user, setUser] = useState<User>(initUser);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            method: 'GET',
          },
        );

        const result = (await response.json()) as User;
        setUser(result);
      } catch (e) {
        console.error(e);
      }
    };
    void getUser();
  }, [id]);

  return {
    user,
  };
};

export default useUserDetail;
