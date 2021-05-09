import React, { Component } from 'react';
import AddressInput from './AddressInput';
import EmbeddedMap from './EmbeddedMap';

class PlayScreen extends Component {
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

export default PlayScreen;
