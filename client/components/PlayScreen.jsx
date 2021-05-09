import React, { Component } from 'react';
import AddressInput from './AddressInput';

class PlayScreen extends Component {
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

export default PlayScreen;
