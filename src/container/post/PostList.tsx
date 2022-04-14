import React from 'react';
import usePostList from './PostListHooks';
import PostListOrganism from '../../component/organisms/PostList';

const PostListContainer: React.FC = () => {
  const { posts } = usePostList();

  return <PostListOrganism posts={posts} />;
};

export default PostListContainer;
