import React, { Component } from 'react';
import AddressInput from './AddressInput';
import EmbeddedMap from './EmbeddedMap';
import StaticImage from './StaticImage';

class PlayScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AddressInput />
        <StaticImage />
        <EmbeddedMap />
      </div>
    );
  }
}

export default PlayScreen;
