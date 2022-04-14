import React from 'react';
import style from '../album/Album.module.css';
import PhotoListContainer from '../../container/photo/PhotoList';

const PhotoListPage: React.FC = () => (
  <>
    <div className={style.title}>PhotoList</div>
    <PhotoListContainer />
  </>
);

export default PhotoListPage;
