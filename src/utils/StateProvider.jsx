import { createContext, useContext, useReducer } from "react";
export const StateContent = createContext();

export const StateProvider = ({ children, initialState, reducer }) => (
  <StateContent.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContent.Provider>
 );
