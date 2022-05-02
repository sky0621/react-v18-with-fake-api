import { useQuery } from 'react-query';
import { userRepository } from '../domain/user/repository';

const useShowMyInfo = (id: number) => {
  const { data: user } = useQuery(
    [id, 'user'],
    () => userRepository.getUser(id),
    {
      enabled: !!id,
    },
  );

  return {
    user,
  };
};

export default useShowMyInfo;
