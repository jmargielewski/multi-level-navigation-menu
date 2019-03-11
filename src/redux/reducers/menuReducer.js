import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  menuStructure: null,
  errorMessage: '',
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, menuStructure: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
