import React from 'react';
import { IFetchData, IPhotosList } from '../type';

export const PhotosList = ({ listOfPhotos }: IPhotosList) => {
  return(
    <>
      {listOfPhotos.map(({id, thumbnailUrl, title}: IFetchData) => (
        <img key={id} src={thumbnailUrl} alt={title}/>
      ))}
    </>
  );
};
