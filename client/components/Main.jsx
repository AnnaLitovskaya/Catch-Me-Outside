import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Playscreen from './Playscreen';
import MultiPlayscreen from './MutliPlayscreen';

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/play" component={Playscreen} exact />
          {/* <Route path="/multiplayscreen" component={MultiPlayscreen} /> */}
          <Route path="*" component={Oops} />
        </Switch>
      </Router>
    );
  }
}

const Home = () => {
  return (
    <div className="center" id="home">
      <img src="Logo.png" />
      <br />
      <br />
      <Link to="/play">
        <button className="big-button">Play</button>
      </Link>
      {/* <Link to="/multiplayscreen">Multiplayer</Link> */}
    </div>
  );
};

const Oops = () => {
  return <h1 className="center">Page can't be found. ¯\_(ツ)_/¯</h1>;
};

export default Main;
