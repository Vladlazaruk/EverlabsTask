import React, { useEffect, useState } from 'react';
import { PHOTOS_BTN, URL } from '../../constans/constants';
import { IFetchData } from './type';
import classNames from "classnames/bind";
import styles from './photos.module.scss';
import { PhotosList } from './photosList/photosList';

const cx = classNames.bind(styles);

export const Photos = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [savedValue, setSavedValue] = useState<string>('');
  const [getPhotos, setGetPhotos] = useState<boolean>(false);
  const [listOfPhotos, setListOfPhotos] = useState<IFetchData[]>([]);

  const toggleGetPhotos = () => setGetPhotos(prevState => !prevState);

  const checkInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.target as HTMLInputElement;
    const checkedValue = input.value.match(/^$|^[1-9][0-9]?$|^100$/);
    if (checkedValue) setInputValue(input.value);
  };

  useEffect(() => {
    getPhotos && fetch(`${URL}${inputValue}`)
      .then(data => data.json())
      .then(result => setListOfPhotos(result));
       setGetPhotos(false);
       setSavedValue(inputValue);
  },[getPhotos])

  return(
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <input
            className={cx('search')}
            placeholder='Type from 1 to 100'
            value={inputValue}
            onChange={(e) => checkInputValue(e)}
        />
        <button
            className={cx('btn')}
            disabled={inputValue === savedValue}
            onClick={toggleGetPhotos}>
            {PHOTOS_BTN}
        </button>
      </div>
        <div className={cx('content')}>
          <PhotosList listOfPhotos={listOfPhotos} />
        </div>
    </div>
  );
};
