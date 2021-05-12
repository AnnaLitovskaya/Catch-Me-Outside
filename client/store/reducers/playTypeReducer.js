import { INPUT_PLAYTYPE } from '../storeComponents/inputAddress';

const inputPlayTypeReducer = (state = 0, action) => {
  switch (action.type) {
    case INPUT_PLAYTYPE: {
      return action.playType;
    }
    default: {
      return state;
    }
  }
};

export default inputPlayTypeReducer;
