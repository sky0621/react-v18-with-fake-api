import React from 'react';
import CommentListOrganism from '../../component/organisms/CommentList';
import useCommentList from './CommentListHooks';

const CommentListContainer: React.FC = () => {
  const { comments } = useCommentList();

  return <CommentListOrganism comments={comments} />;
};

export default CommentListContainer;
