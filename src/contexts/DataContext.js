import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();
const initialState = { activeLink: 'home' }

const dataReducer = (state, action) => {
  if(action.type === 'SET_ACTIVE_LINK'){
    return{ ...state, activeLink: action.payload };
  }
}

export const DataContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, initialState);

  const value = { data, dispatch }

  return(
    <DataContext.Provider value={ value }>
      { children }
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  return useContext(DataContext);
}

