import { createContext, useContext, useReducer, useState } from "react";


const DataContext = createContext();

const initialState = { activeLink: 'contact' }

const reducer = (state, action) => {
  if(action.type === 'SET_ACTIVE_LINK'){
    return{ ...state, activeLink: action.payload };
  }
}

export const DataContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const value = {
    data, dispatch
    // activeLink, setActiveLink
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

