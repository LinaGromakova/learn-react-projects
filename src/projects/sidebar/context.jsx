import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function modalOpen() {
    setIsModalOpen(true);
  }
  function modalClose() {
    setIsModalOpen(false);
  }
  function sidebarOpen() {
    setIsSidebarOpen(true);
  }
  function sidebarClose() {
    setIsSidebarOpen(false);
  }

  return (
    <AppContext.Provider
      value={{ isModalOpen, modalOpen, modalClose, sidebarOpen, sidebarClose, isSidebarOpen }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
