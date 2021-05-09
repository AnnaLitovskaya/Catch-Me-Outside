import inputAddressReducer from './inputAddressReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  address: inputAddressReducer,
});

export default rootReducer;
