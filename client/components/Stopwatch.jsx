import React from 'react';
// import StopwatchDisplay from './StopwatchDisplay.jsx';
import ReactCountdownClock from 'react-countdown-clock';
import FireworksComp from './Fireworks';
import { Link } from 'react-router-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      // currentTimeMs: 0,
      // currentTimeSec: 0,
      // currentTimeMin: 0,
    };

    this.reset = this.reset.bind(this);
    this.stop = this.stop.bind(this);
  }

  // formatTime = (val, ...rest) => {
  //   let value = val.toString();
  //   if (value.length < 2) {
  //     value = '0' + value;
  //   }
  //   if (rest[0] === 'ms' && value.length < 3) {
  //     value = '0' + value;
  //   }
  //   return value;
  // };

  // start = () => {
  //   if (!this.state.running) {
  //     this.setState({ running: true });
  //     this.watch = setInterval(() => this.pace(), 10);
  //   }
  // };

  // stop = () => {
  //   this.setState({ running: false });
  //   clearInterval(this.watch);
  // };

  // pace = () => {
  //   this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
  //   if (this.state.currentTimeMs >= 1000) {
  //     this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
  //     this.setState({ currentTimeMs: 0 });
  //   }
  //   if (this.state.currentTimeSec >= 60) {
  //     this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
  //     this.setState({ currentTimeSec: 0 });
  //   }
  // };

  // reset = () => {
  //   this.props.reRender();
  //   this.setState({
  //     currentTimeMs: 0,
  //     currentTimeSec: 0,
  //     currentTimeMin: 0,
  //   });
  // };

  start() {
    this.setState({ running: true });
  }

  reset() {
    this.props.reRender();
  }

  stop() {
    this.setState({ running: false });
  }

  componentDidMount() {
    this.start();
  }

  render() {
    return (
      <div className="stopwatch">
        {!this.state.running ? (
          <div id="won-box">
            <img id="you-won" src="YouWon.png" />
            <FireworksComp />
            <Link to="/">
              <button id="play-again" className="big-button small reset">
                Play Again!
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <ReactCountdownClock
              id="timer"
              seconds={300}
              color="rgb(106, 163, 137)"
              alpha={0.9}
              size={100}
              onComplete={this.start}
            />
            <div className="wrap">
              <button onClick={this.stop} className="buttona button">
                I Found It!
              </button>
            </div>
            {/* <button>STOP</button> */}
            <div className="wrap">
              <button onClick={this.reset} className="big-button small reset">
                NEW PHOTO
              </button>
            </div>
            {/* <StopwatchDisplay
              ref="display"
              {...this.state}
              formatTime={this.formatTime}
            /> */}
          </div>
        )}
      </div>
    );
  }
}

export default Stopwatch;
