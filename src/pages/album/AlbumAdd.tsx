import React from 'react';
import style from './Album.module.css';
import AlbumAddContainer from '../../container/album/AlbumAdd';

const AlbumAddPage: React.FC = () => (
  <>
    <div className={style.title}>AlbumAdd</div>
    <AlbumAddContainer />
  </>
);

export default AlbumAddPage;
