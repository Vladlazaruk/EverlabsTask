import React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from './main.module.scss';
import { PHOTOS_LINK, TODO_LINK } from '../../constans/constants';

const cx = classNames.bind(styles);

export const Main = () => {
  return(
   <div className={cx('container')}>
     <div className={cx('wrapper')}>
         <Link className={cx('link')} to='/todos'>{TODO_LINK}</Link>
         <Link className={cx('link')} to='/photos'>{PHOTOS_LINK}</Link>
     </div>
   </div>
  );
};