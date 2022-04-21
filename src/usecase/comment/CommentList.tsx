import React from 'react';
import CommentListOrganism from '../../ui/component/organisms/CommentList';
import useCommentList from '../../adapter/CommentListHooks';

const CommentListContainer: React.FC = () => {
  const { comments } = useCommentList();

  return <CommentListOrganism comments={comments} />;
};

export default CommentListContainer;
