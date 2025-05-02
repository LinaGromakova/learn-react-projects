import { products } from './data';

export function reducer(state, action) {
  if (action.type === 'ITEM_REMOVE') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newCart,
      totalAmount: getTotalQuantity(newCart),
      totalPrice: getTotalPrice(newCart),
    };
  }
  if (action.type === 'COUNT_INC') {
    const newCart = state.cart.map((el) => {
      if (action.payload === el.id) {
        return { ...el, amount: ++el.amount };
      }
      return { ...el };
    });

    return {
      ...state,
      newCart,
      totalAmount: getTotalQuantity(newCart),
      totalPrice: getTotalPrice(newCart),
    };
  }
  if (action.type === 'COUNT_DEC') {
    const newCart = state.cart.map((el) => {
      if (action.payload === el.id && el.amount !== 1) {
        return { ...el, amount: --el.amount };
      }
      return { ...el };
    });

    return {
      ...state,
      newCart,
      totalAmount: getTotalQuantity(newCart),
      totalPrice: getTotalPrice(newCart),
    };
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [], totalAmount: 0, totalPrice: 0 };
  }
  throw new Error('Unknown action');
}

export const defaultSetting = {
  cart: [...products],
  totalPrice: getTotalPrice(products),
  totalAmount: getTotalQuantity(products),
};
function getTotalPrice(arr) {
  return arr.reduce((acc, el) => acc + el.amount * el.price, 0).toFixed(2);
}

function getTotalQuantity(arr) {
  return arr.reduce((acc, el) => acc + el.amount, 0);
}
