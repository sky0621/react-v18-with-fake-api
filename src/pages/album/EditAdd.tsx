import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Album.module.css';
import AlbumEditContainer from '../../container/album/AlbumEdit';

const AlbumEditPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <div className={style.title}>AlbumEdit</div>
      <AlbumEditContainer id={Number(id)} />
    </>
  );
};

export default AlbumEditPage;
