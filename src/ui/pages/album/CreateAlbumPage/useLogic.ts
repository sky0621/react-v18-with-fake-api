import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useLogic = () => {
  const navigate = useNavigate();

  const moveToList = useCallback(() => {
    navigate('/albums');
  }, [navigate]);

  return { moveToList };
};

export default useLogic;
