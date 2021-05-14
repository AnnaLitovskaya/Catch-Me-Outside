import React from 'react';
import { connect } from 'react-redux';
import { randomCirclePoint } from 'random-location';
import Stopwatch from './Stopwatch';

class StaticImage extends React.Component {
  constructor(props) {
    super(props);
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
    const randomHeading = Math.floor(Math.random() * 360);
    const { reRender } = this;
    return this.props.lat ? (
      <div>
        {this.props.demo === false ? (
          <img
            src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${newCoords.latitude},${newCoords.longitude}&fov=100&heading=${randomHeading}&pitch=0&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          />
        ) : (
          <img
            src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.7053329,-74.0090676&fov=100&heading=200&pitch=20&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          />
        )}

        <Stopwatch reRender={reRender} />
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
