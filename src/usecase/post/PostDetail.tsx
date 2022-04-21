import React from 'react';
import usePostDetail from '../../adapter/PostDetailHooks';
import PostDetailOrganism from '../../ui/component/organisms/PostDetail';

type Props = {
  id: number;
};

const PostDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const { post } = usePostDetail(id);

  return <PostDetailOrganism post={post} />;
};

export default PostDetailContainer;
