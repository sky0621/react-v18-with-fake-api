import React from 'react';
import style from '../album/Album.module.css';
import CommentListContainer from '../../container/comment/CommentList';

const CommentListPage: React.FC = () => (
  <>
    <div className={style.title}>CommentList</div>
    <CommentListContainer />
  </>
);

export default CommentListPage;
