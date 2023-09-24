// MenuContext.js

import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ isMenuClicked, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
