export function reducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    if (state.value === '') {
      return {
        ...state,
        isModal: true,
        modalType: 'error',
        modalText: 'Please Provide Value',
      };
    } else
      return {
        ...state,
        items: [...state.items, state.value],
        value: '',
        isModal: true,
        modalType: 'success',
        modalText: 'item added to the list!',
      };
  }
  if (action.type === 'ON_CHANGE') {
    return { ...state, value: action.payload };
  }
  if (action.type === 'DELETE') {
    const newItems = state.items.filter((_, i) => i !== action.payload);
    return {
      ...state,
      items: newItems,
      isModal: true,
      modalType: 'success',
      modalText: 'Item Deleted',
    };
  }
  if (action.type === 'MODAL_CLOSE') {
    return { ...state, isModal: false };
  }
  if (action.type === 'TIME_OVER') {
    return { ...state, isModal: false };
  }
}
export const defaultState = {
  items: [],
  value: '',
  isModal: false,
  modalType: '',
  modalText: '',
};
