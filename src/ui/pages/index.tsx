import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'ui/pages/Home';
import CreateAlbumPage from 'ui/pages/album/CreateAlbumPage';
import ListAlbumsPage from 'ui/pages/album/ListAlbumsPage';
import AlbumDetail from 'ui/pages/album/AlbumDetail';
import AlbumEdit from 'ui/pages/album/AlbumEdit';
import CommentList from 'ui/pages/comment/CommentList';
import PhotoList from 'ui/pages/photo/PhotoList';
import PostList from 'ui/pages/post/PostList';
import TodoList from 'ui/pages/todo/TodoList';
import UserList from 'ui/pages/user/UserList';
import UserEdit from 'ui/pages/user/UserEdit';
import NotFound from 'ui/pages/NotFound';
import CommentDetail from 'ui/pages/comment/CommentDetail';
import PostDetail from 'ui/pages/post/PostDetail';
import PhotoDetail from 'ui/pages/photo/PhotoDetail';
import TodoDetail from 'ui/pages/todo/TodoDetail';
import UserDetail from 'ui/pages/user/UserDetail';
import UserAdd from 'ui/pages/user/UserAdd';

const Routing = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="albums">
      <Route path="" element={<ListAlbumsPage />} />
      <Route path=":id" element={<AlbumDetail />} />
      <Route path="add" element={<CreateAlbumPage />} />
      <Route path=":id/edit" element={<AlbumEdit />} />
    </Route>
    <Route path="comments">
      <Route path="" element={<CommentList />} />
      <Route path=":id" element={<CommentDetail />} />
    </Route>
    <Route path="photos">
      <Route path="" element={<PhotoList />} />
      <Route path=":id" element={<PhotoDetail />} />
    </Route>
    <Route path="posts">
      <Route path="" element={<PostList />} />
      <Route path=":id" element={<PostDetail />} />
    </Route>
    <Route path="todos">
      <Route path="" element={<TodoList />} />
      <Route path=":id" element={<TodoDetail />} />
    </Route>
    <Route path="users">
      <Route path="" element={<UserList />} />
      <Route path=":id" element={<UserDetail />} />
      <Route path="add" element={<UserAdd />} />
      <Route path="edit/:id" element={<UserEdit />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Routing;
