import { useState, createContext, useContext } from 'react';

const ExperienceIDContext = createContext();

export const IDProvider = (props) => {
  const { children } = props;
  const [isID, setID] = useState('');
  return (
    <ExperienceIDContext.Provider value={{ isID, setID }}>
      {children}
    </ExperienceIDContext.Provider>
  );
};

export const useButtonIDContext = () => useContext(ExperienceIDContext);
