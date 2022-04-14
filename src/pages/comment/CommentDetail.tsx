import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Comment.module.css';
import CommentDetailContainer from '../../container/comment/ComemntDetail';

const CommentDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <div className={style.title}>CommentDetail</div>
      <CommentDetailContainer id={Number(id)} />
    </>
  );
};

export default CommentDetailPage;
