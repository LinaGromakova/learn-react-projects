import React, { useContext, useReducer } from 'react';
import { defaultSetting, reducer } from './reducer';

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultSetting);

  function removeItem(id) {
    dispatch({ type: 'ITEM_REMOVE', payload: id });
  }
  function inc(id) {
    dispatch({ type: 'COUNT_INC', payload: id });
  }
  function dec(id) {
    dispatch({ type: 'COUNT_DEC', payload: id });
  }
  function clear() {
    dispatch({ type: 'CLEAR_CART' });
  }
  return (
    <AppContext.Provider value={{ ...state, removeItem, inc, dec, clear }}>
      {children}
    </AppContext.Provider>
  );
}
export function useGlobalContext() {
  return useContext(AppContext);
}
