import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useLogic = () => {
  const navigate = useNavigate();

  const moveToAdd = useCallback(() => {
    navigate('/albums/add');
  }, [navigate]);

  return { moveToAdd };
};

export default useLogic;
