import React from 'react';
import { connect } from 'react-redux';
import { randomCirclePoint } from 'random-location';

class StaticImage extends React.Component {
  constructor() {
    super();
    this.reRender = this.reRender.bind(this);
  }

  reRender() {
    this.setState({});
  }

  render() {
    const newCoords = randomCirclePoint(
      { latitude: this.props.lat, longitude: this.props.lng },
      250
    );
    const { reRender } = this;
    return this.props.lat ? (
      <div>
        <button type="button" onClick={reRender}>
          Try Again
        </button>
        <img
          src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${newCoords.latitude},${newCoords.longitude}&fov=100&heading=20&pitch=0&key=AIzaSyDCSoSKRB1ku-YbJ5UH7dRCYy74PEK3ZSU`}
        />
      </div>
    ) : (
      ''
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lat: state.address.latitude,
    lng: state.address.longitude,
    radius: state.playType,
  };
};

export default connect(mapStateToProps)(StaticImage);
