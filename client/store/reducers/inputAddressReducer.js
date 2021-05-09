import { INPUT_ADDRESS } from '../storeComponents/inputAddress';

const inputAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case INPUT_ADDRESS: {
      return { ...action.address };
    }
    default: {
      return state;
    }
  }
};

export default inputAddressReducer;
