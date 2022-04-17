import React from 'react';
import { useParams } from 'react-router-dom';
import CommentDetailContainer from '../../container/comment/ComemntDetail';

const CommentDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <CommentDetailContainer id={Number(id)} />
    </>
  );
};

export default CommentDetailPage;
