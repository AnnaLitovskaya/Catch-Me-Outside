import React from 'react';
import { connect } from 'react-redux';

class StaticImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return this.props.lat ? (
      <img
        src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${this.props.lat},${this.props.lng}&fov=100&heading=20&pitch=0&key=AIzaSyDCSoSKRB1ku-YbJ5UH7dRCYy74PEK3ZSU`}
      />
    ) : (
      ''
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lat: state.address.latitude,
    lng: state.address.longitude,
  };
};

export default connect(mapStateToProps)(StaticImage);
