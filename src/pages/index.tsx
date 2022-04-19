import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home';
import UserDetail from 'pages/user/UserDetail';
import UserAdd from 'pages/user/UserAdd';
import AlbumList from 'pages/album/AlbumList';
import CommentList from 'pages/comment/CommentList';
import PhotoList from 'pages/photo/PhotoList';
import PostList from 'pages/post/PostList';
import TodoList from 'pages/todo/TodoList';
import UserList from 'pages/user/UserList';
import UserEdit from 'pages/user/UserEdit';
import AlbumDetail from 'pages/album/AlbumDetail';
import NotFound from 'pages/NotFound';
import CommentDetail from 'pages/comment/CommentDetail';
import PostDetail from 'pages/post/PostDetail';
import PhotoDetail from 'pages/photo/PhotoDetail';
import TodoDetail from 'pages/todo/TodoDetail';
import AlbumAdd from 'pages/album/AlbumAdd';
import AlbumEdit from 'pages/album/AlbumEdit';

const Routing = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="albums">
      <Route path="" element={<AlbumList />} />
      <Route path=":id" element={<AlbumDetail />} />
      <Route path="add" element={<AlbumAdd />} />
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
