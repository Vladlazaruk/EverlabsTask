import React from 'react';
import styles from '../toDo/toDo.module.scss';
import { getItemsFromStorage } from '../../utils/utils';
import { IFiltersBtn } from './type';
import { ALL_TODO, DONE_TODO, NOT_DONE_TODO } from '../../constans/constants';
import classNames from 'classnames/bind';
import { IToDo } from '../toDo/type';

const cx = classNames.bind(styles);

export const FiltersBtn = ({ doneToDo, notDone, allToDo }: IFiltersBtn) => {
  const getAllToDo = () => {
    const sortedToDoFromStorage = getItemsFromStorage().sort((a: IToDo,b: IToDo) => +a.completed - +b.completed);
    allToDo(sortedToDoFromStorage);
  };

  const getNotDoneToDo = () => notDone(getItemsFromStorage());

  const getDoneToDo = () => doneToDo(getItemsFromStorage());

  return(
    <>
      <button className={cx('btn')} onClick={getAllToDo} >{ALL_TODO}</button>
      <button className={cx('btn')} onClick={getNotDoneToDo}>{NOT_DONE_TODO}</button>
      <button className={cx('btn')} onClick={getDoneToDo}>{DONE_TODO}</button>
    </>
  );
};