import { IToDo } from '../toDo/type';

export interface IFiltersBtn {
    className: string;
    doneToDo: (arr: IToDo[]) => void;
    notDone: (arr: IToDo[]) => void;
    allToDo: (arr: IToDo[]) => void;
}