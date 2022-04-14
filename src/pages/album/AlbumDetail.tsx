import React from 'react';
import { useParams } from 'react-router-dom';
import AlbumDetailContainer from '../../container/album/AlbumDetail';
import style from './Album.module.css';

const AlbumDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <div className={style.title}>AlbumDetail</div>
      <AlbumDetailContainer id={Number(id)} />
    </>
  );
};

export default AlbumDetailPage;
