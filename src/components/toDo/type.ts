export interface IToDo {
    toDo: string;
    completed: boolean;
    id: string;
}

export interface IToDoItem {
    item: IToDo;
    removeToDo: (item: IToDo) => void;
    checkHandler: (item: IToDo) => void;
}
