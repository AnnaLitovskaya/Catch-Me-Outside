import React, { Component } from 'react';
import AddressInput from './AddressInput';
import EmbeddedMap from './EmbeddedMap';

class Playscreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AddressInput />
        <EmbeddedMap />
      </div>
    );
  }
}

export default Playscreen;
