import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ navOpen, setNavOpen, showContact, setShowContact }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
