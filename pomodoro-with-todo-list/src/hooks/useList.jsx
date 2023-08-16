import { useState } from 'react';

export default function useList(initialList = []) {
  const [list, setList] = useState(initialList);

  const addItem = (item) => {
    setList((prevList) => [...prevList, item]);
  };

  const removeItem = (index) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  const removeItemByField = (fieldName, fieldValue) => {
    setList((prevList) => {
      const updatedList = prevList.filter(item => item[fieldName] !== fieldValue);
      return updatedList;
    });
  };

  const updateItem = (index, newItem) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = newItem;
      return updatedList;
    });
  };

  const clearList = () => {
    setList([]);
  };

  return {
    list,
    addItem,
    removeItem,
    removeItemByField,
    updateItem,
    clearList,
    setList
  };
};
