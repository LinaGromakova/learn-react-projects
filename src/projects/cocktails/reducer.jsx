export function reducer(state, action) {
  switch (action.type) {
    case 'ONCHANGE_INPUT_VALUE':
      return { ...state, searchValue: action.payload };
    case 'SEARCH_APPLY': {
      const filterValue = state.searchValue !== '' ? state.searchValue : 'a';
      return { ...state, filter: filterValue, searchValue: '' };
    }
    case 'FETCH_DATA': {
      return { ...state, cocktails: action.payload };
    }
    case 'READ_MORE': {
      const matchingCocktail = state.cocktails.find((el) => el.id === action.payload);
      return { ...state, selectCocktail: matchingCocktail };
    }
    case 'CLOSE_MODAL': {
      return { ...state, isModal: false };
    }
    case 'SUBSCRIBE': {
      if (action.payload === 'test@test.com') {
        return {
          ...state,
          isModal: true,
          modalType: 'success',
          modalMessage: 'success, check your email',
          submitting: 'submit',
        };
      } else
        return {
          ...state,
          isModal: true,
          modalType: 'error',
          modalMessage: 'only test email allowed',
          submitting: 'submit',
        };
    }
    case 'SUBMITTING': {
      return { ...state, submitting: 'submitting...' };
    }
    case 'LOADING': {
      return { ...state, loading: true };
    }
    case 'UPLOAD': {
      return { ...state, loading: false };
    }
    case 'ERROR': {
      return { ...state, error: true };
    }
  }
}

export const defaultConfig = {
  cocktails: [],
  searchValue: '',
  filter: 'a',
  selectCocktail: {},
  isModal: false,
  modalType: 'success',
  modalMessage: 'success, check your email',
  submitting: 'submit',
  loading: true,
  error: false,
};
