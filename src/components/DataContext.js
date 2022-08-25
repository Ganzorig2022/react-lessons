import { createContext, useContext, useState } from 'react';
import data from '../data.json';

const dataContext = createContext();

export const DataProvider = (props) => {
  const { children } = props;

  return (
    <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
  );
};

export const useDataContext = () => useContext(dataContext);
