import React from 'react';
import usePostList from '../../adapter/PostListHooks';
import PostListOrganism from '../../ui/component/organisms/PostList';

const PostListContainer: React.FC = () => {
  const { posts } = usePostList();

  return <PostListOrganism posts={posts} />;
};

export default PostListContainer;
