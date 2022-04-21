import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetailContainer from '../../../container/post/PostDetail';

const PostDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <PostDetailContainer id={Number(id)} />
    </>
  );
};

export default PostDetailPage;
