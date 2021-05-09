import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Iframe from 'react-iframe';

class EmbeddedMap extends Component {
  constructor() {
    super();
  }
  render() {
    const style = {
      width: '500px',
      height: '500px',
    };
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={12}
          initialCenter={{
            lat: 35.5496939,
            lng: -120.7060049,
          }}
          style={style}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDCSoSKRB1ku-YbJ5UH7dRCYy74PEK3ZSU',
})(EmbeddedMap);
