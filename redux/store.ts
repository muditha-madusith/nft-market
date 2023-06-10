import { createStore } from 'redux';
import { RootState } from './types';

const initialState: RootState = {
    showToast: false,
};

const reducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return { ...state, showToast: true };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
