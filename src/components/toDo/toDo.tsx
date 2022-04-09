import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { ToDoItem } from './toDoItem/toDoItem';
import {
  addItemInStorage,
  removeItemFromStorage,
  sortedList,
  toggleItemInStorage
} from '../../utils/utils';
import { IToDo } from './type';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckedValue, setList } from '../../redux/toDo/toDoSlice';
import { getCheckedValue, getToDoList } from '../../redux/toDo/toDoSelectors';
import classNames from "classnames/bind";
import styles from './toDo.module.scss';
import { ADD_TODO_BTN } from '../../constans/constants';

const cx = classNames.bind(styles);

export const ToDos = () => {
  const dispatch = useDispatch();

  const toDoList = useSelector(getToDoList);
  const checkedValue = useSelector(getCheckedValue);

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const dataFromStorage = JSON.parse(localStorage.getItem('toDos') || '[]');
    const sortedData = dataFromStorage.sort((a: IToDo,b: IToDo) => +a.completed - +b.completed);
    dispatch(setList(sortedData));
  },[]);

  useEffect(() => {
    if (checkedValue.toDo) dispatch(setList(sortedList(toDoList, checkedValue)));
  },[checkedValue]);

  const addNewToDo = (item: string) => {
    if (!!item.length) {
      const newItem = { toDo: item, completed: false, id: uuid(), };
      addItemInStorage(newItem);
      dispatch(setList([...toDoList, newItem]));
      setInputValue('');
    }
  };

  const removeToDo = (item: IToDo) => {
    const result = toDoList.filter((toDo) => toDo.toDo !== item.toDo);
    removeItemFromStorage(result);
    dispatch(setList(result));
  };

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.target as HTMLInputElement;
    setInputValue(input.value);
  };

  const checkHandler = (item: IToDo) => {
    toggleItemInStorage({...item, completed: !item.completed});
    dispatch(setCheckedValue({...item, completed: !item.completed}));
  };

  return(
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <input
            placeholder='TYPE SMTH...'
            className={cx('search')}
            value={inputValue}
            onChange={inputHandler}
        />
        <button
            className={cx('btn')}
            onClick={() => addNewToDo(inputValue)}>
          {ADD_TODO_BTN}
        </button>
      </div>
      <ul className={cx('list')}>
        {toDoList.map((item: IToDo) => (
          <ToDoItem
              key={item.id}
              removeToDo={removeToDo}
              item={item}
              checkHandler={checkHandler}
          />
        ))}
      </ul>
    </div>
  );
};
