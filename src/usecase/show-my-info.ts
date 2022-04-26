import { useQuery } from 'react-query';
import getUser from '../domain/user/repository';

const useShowMyInfo = (id: number) => {
  const { data: user } = useQuery([id, 'user'], () => getUser(id), {
    enabled: !!id,
  });

  return {
    user,
  };
};

export default useShowMyInfo;
