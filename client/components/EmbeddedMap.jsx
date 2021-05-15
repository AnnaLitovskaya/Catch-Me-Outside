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

  componentDidMount() {
    this.setState({
      lat: this.props.latitude,
      lng: this.props.longitude,
    });
  }

  render() {
    const coords = {
      lat: this.props.latitude,
      lng: this.props.longitude,
    };
    return (
      <div>
        {this.state.lat ? (
          <Map
            initialCenter={coords}
            google={this.props.google}
            style={{ width: 500, height: 500 }}
            zoom={16}
          >
            <Circle
              radius={this.props.radius}
              center={coords}
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
  radius: state.playType,
});

const enhance = compose(
  connect(mapStateToProps),
  GoogleApiWrapper(() => ({
    apiKey: process.env.REACT_APP_GOOGLE_KEY,
  }))
);

export default enhance(EmbeddedMap);
