import {IToDo} from "../../components/toDo/type";

export interface IToDoSlice {
    toDoList: IToDo[];
    checkedValue: IToDo;
    inputValue: string;
}

export interface IEditValue {
    item: IToDo;
    editValue: string;
}
