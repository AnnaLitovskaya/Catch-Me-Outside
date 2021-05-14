import React, { Component } from 'react';
import AddressInput from './AddressInput';

class Playscreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AddressInput />
      </div>
    );
  }
}

export default Playscreen;
