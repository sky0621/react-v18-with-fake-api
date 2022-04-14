import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Photo.module.css';
import PhotoDetailContainer from '../../container/photo/PhotoDetail';

const PhotoDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <div className={style.title}>PhotoDetail</div>
      <PhotoDetailContainer id={Number(id)} />
    </>
  );
};

export default PhotoDetailPage;
