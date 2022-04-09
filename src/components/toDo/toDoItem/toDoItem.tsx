import React, {useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IToDoItem } from '../type';
import { ReactComponent as Edit } from '../../../assets/icons/editPencil.svg';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { editToDoValue } from '../../../redux/toDo/toDoSlice';
import { editItemInStorage } from '../../../utils/utils';
import styles from './toDoItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const ToDoItem = ({ item, removeToDo, checkHandler }: IToDoItem) => {
  const { toDo, id, completed } = item;
  const dispatch = useDispatch();

  const myRef = useRef<HTMLInputElement>(null);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(toDo)

  const toggleEdit = () => setIsEdit(prevState => !prevState);

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      setInputValue(input.value);
  };

  useEffect(() => {
    dispatch(editToDoValue({item: item, editValue: inputValue}));
    editItemInStorage(item, inputValue);
    myRef.current && myRef.current.focus();
    }, [isEdit])

  return(
    <li className={cx('container')} key={toDo}>
      <div>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => checkHandler(item)}
          className={cx('container__checkbox')}
        />
        {isEdit ? (
          <input
            ref={myRef}
            className={cx('container__input')}
            value={inputValue}
            onChange={inputHandler}
          />
          ) : (
          <Link
            className={cx('container__link')}
            to={`/todos/${id}`}
          >
            {toDo}
          </Link>
          )}
      </div>
      <div className={cx('wrapper')}>
          <button className={cx('container__btn')} onClick={toggleEdit}>
            <Edit />
          </button>
          <button
            className={cx('container__btn')}
            onClick={() => removeToDo(item)}>
              <Delete />
          </button>
      </div>
    </li>
  );
};
