import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return <AppContext.Provider value={{menuIsOpen, setMenuIsOpen}}>{children}</AppContext.Provider>;
}

export function useGlobalContext() {
  return useContext(AppContext);
}
