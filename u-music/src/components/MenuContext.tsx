import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextProps {
  isMenuClicked: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
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
