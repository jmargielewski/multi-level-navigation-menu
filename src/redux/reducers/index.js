import { combineReducers } from 'redux';
import menuReducer from './menuReducer';

const reducer = combineReducers({
  menu: menuReducer,
});

export default reducer;
