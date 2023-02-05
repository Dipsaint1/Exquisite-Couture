import { createContext, useContext, useState } from "react";


const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

  const [activeLink, setActiveLink] = useState('home');

  const value = {
    activeLink, setActiveLink
  }

  return(
    <DataContext.Provider value={ value }>
      { children }
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  return useContext(DataContext);
}

