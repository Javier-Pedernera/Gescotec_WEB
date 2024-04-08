import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ThemeContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}