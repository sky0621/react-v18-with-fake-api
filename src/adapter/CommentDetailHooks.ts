import { useEffect, useState } from 'react';
import { Comment, initComment } from '../domain/model/comment';

const useCommentDetail = (id: number) => {
  const [comment, setComment] = useState<Comment>(initComment);

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments/${id}`,
          {
            method: 'GET',
          },
        );

        const result = (await response.json()) as Comment;
        setComment(result);
      } catch (e) {
        console.error(e);
      }
    };
    void getComment();
  }, [id]);

  return {
    comment,
  };
};

export default useCommentDetail;
