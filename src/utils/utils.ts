import { IToDo } from '../components/toDo/type';

export const addItemInStorage = (item: IToDo) => {
  const toDosFromStorage = JSON.parse(localStorage.getItem('toDos') || '[]');
  if (!!toDosFromStorage.length) {
    localStorage.setItem('toDos', JSON.stringify([...toDosFromStorage, item]));
  }
  if (!toDosFromStorage.length) localStorage.setItem('toDos', JSON.stringify([item]));
};

export const removeItemFromStorage = (arr: IToDo[]) => {
  localStorage.setItem('toDos', JSON.stringify(arr));
};

export const getItemsFromStorage = () => {
  const result = localStorage.getItem('toDos');
  if (result) return JSON.parse(result);
};

export const toggleItemInStorage = (item: IToDo) => {
  const toDosFromStorage = JSON.parse(localStorage.getItem('toDos') || '[]');
  if (toDosFromStorage.length) {
    const result = toDosFromStorage.map((element: IToDo) => element.toDo === item.toDo ? item : element);
    localStorage.setItem('toDos', JSON.stringify(result));
  }
  if (!toDosFromStorage.length) localStorage.setItem('toDos', JSON.stringify(item));
};

export const editItemInStorage = (item: IToDo, editValue: string) => {
  const toDosFromStorage = JSON.parse(localStorage.getItem('toDos') || '[]');
  if (toDosFromStorage.length) {
    const result = toDosFromStorage.map((element: IToDo) => {
      if (item.id === element.id) {
        return {...element, toDo: editValue};
      }
      return element;
      })
      localStorage.setItem('toDos', JSON.stringify(result));
    }
    if (!toDosFromStorage.length) localStorage.setItem('toDos', JSON.stringify(item));
};

export const sortedList = (arr: IToDo[], checkedElement: IToDo) => {
  if (checkedElement?.completed) {
    const arrWithoutElement = arr.filter((toDo) => toDo.toDo !== checkedElement.toDo);
    return [...arrWithoutElement, checkedElement];
  }
  if (!checkedElement?.completed) {
    const test = arr.filter((toDo: IToDo) => toDo.toDo !== checkedElement.toDo);
    return [{ ...checkedElement, completed: false}, ...test]
  }
  return arr;
};
