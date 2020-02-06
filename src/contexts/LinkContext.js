import React, { createContext, useState } from 'react';

export const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {
  const [links, setLinks] = useState([
    { text: 'Première visite', url: '#', id: 1 },
    { text: 'Adaptation', url: '#', id: 2 },
    { text: 'Patients en lorem', url: '#', id: 3 },
    { text: 'Patients appareillés', url: '#', id: 4 },
    { text: 'Relances', url: '#', id: 5 },
    { text: 'Statistiques', url: '#', id: 6 },
  ]);

  return (
    <LinkContext.Provider value={{ links }}>{children}</LinkContext.Provider>
  );
};

export default LinkContextProvider;
