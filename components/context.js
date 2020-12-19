import React, { Component, createContext, useReducer } from 'react';
const defaultGlobalState = {
    plant1: [],
    plant2: [],
    user: {},
    terrarium1: {},
  };
  export const globalStateContext = createContext(defaultGlobalState);
  export const dispatchStateContext = createContext();

  
  export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      (state, newValue) => ({ ...state, ...newValue }),
      defaultGlobalState
    );
    return (
      <globalStateContext.Provider value={state}>
        <dispatchStateContext.Provider value={dispatch}>
          {children}
        </dispatchStateContext.Provider>
      </globalStateContext.Provider>
    );
  };
//   export default [
//     React.useContext(GlobalStateContext),
//     React.useContext(DispatchStateContext)
//   ];