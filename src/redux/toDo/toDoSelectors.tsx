import { IRootState } from '../rootType';

export const getToDoList = (state: IRootState) => state.toDo.toDoList;
export const getCheckedValue = (state: IRootState) => state.toDo.checkedValue;
