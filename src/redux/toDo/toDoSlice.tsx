import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEditValue, IToDoSlice } from './type';
import { IToDo } from '../../components/toDo/type';

const initialState: IToDoSlice = {
    toDoList: [],
    checkedValue: {
      toDo: '',
      completed: false,
      id: '',
    },
    inputValue: '',
};

const ToDoSlice = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
      setList: ((state: IToDoSlice, action: PayloadAction<IToDo[]>) => {
        state.toDoList = action.payload;
      }),
      setCheckedValue: ((state: IToDoSlice, action: PayloadAction<IToDo>) => {
        state.checkedValue = action.payload;
      }),
      editToDoValue: ((state: IToDoSlice, action: PayloadAction<IEditValue>) => {
        state.toDoList = state.toDoList.map((item) => {
            if (item.toDo === action.payload.item.toDo) {
                return {...item, toDo: action.payload.editValue};
            }
            return item;
        })
      })
    },
});

const { actions, reducer } = ToDoSlice;
export const { setList, setCheckedValue, editToDoValue, } = actions;
export default reducer;
