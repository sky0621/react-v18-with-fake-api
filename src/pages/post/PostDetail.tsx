import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Post.module.css';
import PostDetailContainer from '../../container/post/PostDetail';

const PostDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <div className={style.title}>PostDetail</div>
      <PostDetailContainer id={Number(id)} />
    </>
  );
};

export default PostDetailPage;
