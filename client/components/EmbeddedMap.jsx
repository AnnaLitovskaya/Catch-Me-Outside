import React, { Component } from 'react';
import { Circle, Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import { compose } from 'redux';

class EmbeddedMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.latitude !== this.props.latitude) {
      this.setState({
        lat: this.props.latitude,
        lng: this.props.longitude,
      });
    }
  }

  render() {
    const coords = this.state.lat
      ? { lat: this.state.lat, lng: this.state.lng }
      : {
          lat: 40.854885,
          lng: -88.081807,
        };
    return (
      <div>
        {this.state.lat ? (
          <Map
            initialCenter={coords}
            google={this.props.google}
            style={{ width: 500, height: 500, position: 'relative' }}
            zoom={15}
          >
            <Circle
              radius={500}
              center={coords}
              // onMouseover={() => console.log('mouseover')}
              // onClick={() => console.log('click')}
              // onMouseout={() => console.log('mouseout')}
              strokeColor="transparent"
              strokeOpacity={0}
              strokeWeight={5}
              fillColor="#FF0000"
              fillOpacity={0.2}
            />
          </Map>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.address.latitude,
  longitude: state.address.longitude,
});

const enhance = compose(
  connect(mapStateToProps),
  GoogleApiWrapper(() => ({
    apiKey: process.env.REACT_APP_GOOGLE_KEY,
  }))
);

export default enhance(EmbeddedMap);
