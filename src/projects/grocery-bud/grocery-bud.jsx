import { useEffect, useReducer } from 'react';
import { Item } from './item';
import './style.css';
import { UiModal } from './ui-modal';
import { reducer, defaultState } from './reducer';
import { getLocalStorage } from './getLocalStorage';

export function GroceryBud() {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
    items: getLocalStorage() ?? [],
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.items));
  }, [state.items]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: 'TIME_OVER' });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [state.isModal]);

  return (
    <>
      <section className='wrapper'>
        <h1>grocery bud</h1>
        <form action='#' className='form'>
          <input
            type='text'
            className='inp'
            value={state.value}
            onChange={(e) => dispatch({ type: 'ON_CHANGE', payload: e.target.value })}
          />
          <button type='submit' className='btn-add' onClick={() => dispatch({ type: 'ADD_ITEM' })}>
            Add item
          </button>
        </form>
        {state.items.map((item, index) => {
          return (
            <Item
              text={item}
              key={index}
              handlerDelete={() => dispatch({ type: 'DELETE', payload: index })}
            ></Item>
          );
        })}
      </section>
      {state.isModal && (
        <UiModal
          key={new Date().getTime.toString()}
          type={state.modalType}
          text={state.modalText}
          handlerModalClose={() => dispatch({ type: 'MODAL_CLOSE' })}
        ></UiModal>
      )}
    </>
  );
}
