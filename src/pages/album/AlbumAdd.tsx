import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Album.module.css';
import AlbumAddContainer from '../../container/album/AlbumAdd';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { OnSuccessFunc } from '../../fn';

const AlbumAddPage: React.FC = () => {
  const navigate = useNavigate();
  const moveToList: OnSuccessFunc = () => {
    navigate('/albums');
  };

  return (
    <>
      <div className={style.title}>AlbumAdd</div>
      <AlbumAddContainer onSuccess={moveToList} />
    </>
  );
};

export default AlbumAddPage;
