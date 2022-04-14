import React from 'react';
import AlbumListContainer from '../../container/album/AlbumList';
import style from './Album.module.css';

const AlbumListPage: React.FC = () => (
  <>
    <div className={style.title}>AlbumList</div>
    <AlbumListContainer />
  </>
);

export default AlbumListPage;
