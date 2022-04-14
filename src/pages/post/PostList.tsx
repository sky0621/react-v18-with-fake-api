import React from 'react';
import style from '../album/Album.module.css';
import PostListContainer from '../../container/post/PostList';

const PostListPage: React.FC = () => (
  <>
    <div className={style.title}>PostList</div>
    <PostListContainer />
  </>
);

export default PostListPage;
