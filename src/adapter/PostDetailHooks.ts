import { useEffect, useState } from 'react';
import { Post, initPost } from '../domain/model/post';

const usePostDetail = (id: number) => {
  const [post, setPost] = useState<Post>(initPost);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          {
            method: 'GET',
          },
        );

        const result = (await response.json()) as Post;
        setPost(result);
      } catch (e) {
        console.error(e);
      }
    };
    void getPost();
  }, [id]);

  return {
    post,
  };
};

export default usePostDetail;
