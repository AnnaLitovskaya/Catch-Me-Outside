import axios from 'axios';

const INPUT_ADDRESS = 'INPUT_ADDRESS';

const inputAddress = (address) => {
  return async (dispatch) => {
    let latitude, longitude;

    const options = {
      method: 'GET',
      url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
      params: {
        address: `${address}`,
        language: 'en',
      },
      headers: {
        'x-rapidapi-key': '36ac198dc1msh92ea9479b4a338fp1aa9b0jsne0bb0e2b28ed',
        'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      latitude = response.data.results[0].geometry.location.lat;
      longitude = response.data.results[0].geometry.location.lng;
    } catch (ex) {
      console.error(ex);
    }

    address = {
      address,
      latitude,
      longitude,
    };

    dispatch(_inputAddress(address));
  };
};

const _inputAddress = (address) => {
  return {
    type: INPUT_ADDRESS,
    address,
  };
};

export { inputAddress, INPUT_ADDRESS };
