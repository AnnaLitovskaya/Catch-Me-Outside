import React, { Component } from 'react';
import AddressInput from './AddressInput';
import EmbeddedMap from './EmbeddedMap';

const url = window.location.origin.replace('http', 'ws');
const socket = new WebSocket(url);

class MultiPlayscreen extends Component {
  constructor() {
    super();
    this.state = {
      roomID: '',
      roomNum: 0,
    };
  }

  componentDidMount() {
    socket.addEventListener('message', (ev) => {
      const roomID = JSON.parse(ev.data).roomID;
      const roomNum = JSON.parse(ev.data).roomNum;
      this.setState({ roomID, roomNum });
    });
  }

  joinRoom(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Room Number : {this.state.roomNum}</h2>
        <h2>Room ID : {this.state.roomID}</h2>
        <button onClick={this.startGame} type="button">
          <a href={`/multiplayscreen/${this.state.roomID}`}>Start Game</a>
        </button>
        <button onClick={this.joinRoom} type="button">
          Join Room
        </button>
        <AddressInput finished={this.state.finished} won={this.state.won} />
        <EmbeddedMap />
      </div>
    );
  }
}

export default MultiPlayscreen;
