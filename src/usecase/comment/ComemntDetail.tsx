import React from 'react';
import useCommentDetail from '../../adapter/CommentDetailHooks';
import CommentDetailOrganism from '../../ui/component/organisms/CommentDetail';

type Props = {
  id: number;
};

const CommentDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const { comment } = useCommentDetail(id);

  return <CommentDetailOrganism comment={comment} />;
};

export default CommentDetailContainer;
