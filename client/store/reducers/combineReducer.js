import inputAddressReducer from './inputAddressReducer';
import inputPlayTypeReducer from './playTypeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  address: inputAddressReducer,
  playType: inputPlayTypeReducer,
});

export default rootReducer;
