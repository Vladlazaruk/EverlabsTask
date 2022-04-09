import { configureStore } from '@reduxjs/toolkit';
import toDosReducer from './toDo/toDoSlice';

const store = configureStore({
    reducer: {
        toDo: toDosReducer,
    },
});

export default store;
