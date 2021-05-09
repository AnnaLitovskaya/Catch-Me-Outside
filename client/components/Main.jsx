import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PlayScreen from './PlayScreen';

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/play" component={PlayScreen} exact />
          <Route path="*" component={Oops} />
        </Switch>
      </Router>
    );
  }
}

const Home = () => {
  return (
    <div className="center">
      <h1>Catch Me Outside</h1>
      <Link to="/play">Play</Link>
    </div>
  );
};

const Oops = () => {
  return <h1 className="center">Page can't be found. ¯\_(ツ)_/¯</h1>;
};

export default Main;
