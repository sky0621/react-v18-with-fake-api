import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './Album.module.css';
import AlbumEditContainer from '../../container/album/AlbumEdit';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { OnSuccessFunc } from '../../fn';

const AlbumEditPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const moveToList: OnSuccessFunc = () => {
    navigate('/albums');
  };

  return (
    <>
      <div className={style.title}>AlbumEdit</div>
      <AlbumEditContainer id={Number(id)} onSuccess={moveToList} />
    </>
  );
};

export default AlbumEditPage;
