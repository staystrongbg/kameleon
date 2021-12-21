import { createContext } from 'react';
import React, { useState, useContext } from 'react';
import data from './data';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [height, setHeight] = useState(false);

  function importAll(r) {
    return r.keys().map(r);
  }
  const handleScroll = () => {
    setHeight(window.pageYOffset > 0 ? true : false);
  };

  return (
    <AppContext.Provider
      value={{
        importAll,
        showModal,
        setShowModal,
        modalImage,
        setModalImage,
        showSidebar,
        setShowSidebar,
        handleScroll,
        height,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
