import { useEffect, useState } from 'react';
import { Comment } from '../domain/model/comment';

const useCommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/comments',
          {
            method: 'GET',
          },
        );

        const results = (await response.json()) as Comment[];
        setComments(results);
      } catch (e) {
        console.error(e);
      }
    };
    void getComments();
  }, []);

  return {
    comments,
  };
};

export default useCommentList;
