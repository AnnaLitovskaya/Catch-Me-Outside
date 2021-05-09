import axios from 'axios';

const INPUT_ADDRESS = 'INPUT_ADDRESS';

const inputAddress = (address) => {
  return async (dispatch) => {
    let coordinates = { latitude: '', longitude: '' };

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

    axios
      .request(options)
      .then(function (response) {
        coordinates.latitude = response.data.results[0].geometry.location.lat;
        coordinates.longitude = response.data.results[0].geometry.location.lng;
      })
      .catch(function (error) {
        console.error(error);
      });

    address = {
      address,
      coordinates,
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
