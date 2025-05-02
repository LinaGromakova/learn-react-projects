import React, { useContext, useEffect, useReducer } from 'react';
import { defaultConfig, reducer } from './reducer';

export const AppContext = React.createContext();
function validateIngr(array) {
  return array.filter((el) => el !== null).join(', ');
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultConfig);
  async function getCocktailsList(filter) {
    dispatch({ type: 'LOADING' });
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`)
      .then((response) => response.json())
      .then((data) => {
        let drinks = [];
        if (data.drinks === null) {
          drinks = [];
        } else {
          drinks = data.drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strCategory,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
              strInstructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strIngredient9,
              strIngredient10,
              strIngredient11,
              strIngredient12,
              strIngredient13,
              strIngredient14,
              strIngredient15,
            } = item;
            return {
              id: idDrink,
              category: strCategory,
              name: strDrink,
              img: strDrinkThumb,
              char: strAlcoholic,
              glass: strGlass,
              instructions: strInstructions,
              ingredients: validateIngr([
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
              ]),
            };
          });
        }
        dispatch({ type: 'UPLOAD' });
        dispatch({ type: 'FETCH_DATA', payload: drinks });
      })
      .catch((error = new Error('Ooops! Error!')) => {
        console.error(error);
        dispatch({ type: 'ERROR' });
        dispatch({ type: 'UPLOAD' });
      });
  }

  useEffect(() => {
    getCocktailsList(state.filter);
  }, [state.filter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: 'CLOSE_MODAL' });
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [state.isModal]);

  function handlerInputChange(e) {
    dispatch({ type: 'ONCHANGE_INPUT_VALUE', payload: e.target.value });
  }
  function handlerApplySearch(e) {
    e.preventDefault();
    dispatch({ type: 'SEARCH_APPLY' });
  }

  function handlerCloseModal() {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  function handlerOpenInfo(id) {
    dispatch({ type: 'READ_MORE', payload: id });
  }

  function handlerSubscribe(emailValue) {
    return dispatch({ type: 'SUBSCRIBE', payload: emailValue });
  }
  function handlerSumbitting() {
    return dispatch({ type: 'SUBMITTING' });
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        handlerInputChange,
        handlerApplySearch,
        handlerOpenInfo,
        handlerSubscribe,
        handlerCloseModal,
        handlerSumbitting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useGlobalContext() {
  return useContext(AppContext);
}
