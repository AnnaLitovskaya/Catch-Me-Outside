import axios from 'axios';

const INPUT_ADDRESS = 'INPUT_ADDRESS';

const inputAddress = (address) => {
  return async (dispatch) => {
    try {
      const inputAddress = (await axios.post('/api/campuses/addCampus', campus))
        .data;
      dispatch(_inputAddress(inputAddress));
      history.push('/campuses');
    } catch (ex) {
      console.log(ex);
    }
  };
};

const _inputAddress = (address) => {
  return {
    type: INPUT_ADDRESS,
    address,
  };
};

export { inputAddress, INPUT_ADDRESS };
