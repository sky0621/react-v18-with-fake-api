import { useEffect, useState } from 'react';
import { Post } from '../domain/model/post';

const usePostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          {
            method: 'GET',
          },
        );

        const results = (await response.json()) as Post[];
        setPosts(results);
      } catch (e) {
        console.error(e);
      }
    };
    void getPosts();
  }, []);

  return {
    posts,
  };
};

export default usePostList;
