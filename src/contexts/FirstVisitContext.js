import React, { createContext, useState } from 'react';

export const FirstVisitContext = createContext();

const FirstVisitContextProvider = ({ children }) => {
  const [CurrentDisplay, setCurrentDisplay] = useState('FirstStep');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isMan, setIsMan] = useState(true);

  return (
    <FirstVisitContext.Provider
      value={{
        CurrentDisplay,
        setCurrentDisplay,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        isMan,
        setIsMan,
      }}
    >
      {children}
    </FirstVisitContext.Provider>
  );
};

export default FirstVisitContextProvider;
