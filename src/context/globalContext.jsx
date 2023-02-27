import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
