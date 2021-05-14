import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputAddress } from '../store/storeComponents/inputAddress';
import StaticImage from './StaticImage';
import { TextField } from '@material-ui/core';
import EmbeddedMap from './EmbeddedMap';

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wholeAddress: '',
      address: '',
      city: '',
      playType: 500,
      demo: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    if (evt.target.name === 'playType') {
      if (evt.target.value === 'normal') {
        this.setState({
          playType: 500,
          demo: false,
        });
      } else if (evt.target.value === 'easy') {
        this.setState({
          playType: 250,
          demo: false,
        });
      } else {
        this.setState({
          playType: 250,
          demo: true,
        });
      }
    } else {
      this.setState({
        [evt.target.name]: evt.target.value,
      });
    }
  }

  onSubmit(evt) {
    evt.preventDefault();
    const wholeAddress = `${this.state.address}, ${this.state.city}`;
    this.setState({ wholeAddress });
    if (this.state.demo === false) {
      this.props.inputAddress(wholeAddress, this.state.playType);
    } else {
      this.props.inputAddress(
        '5 Hanover Square, New York',
        this.state.playType
      );
      this.setState({ wholeAddress: '5 Hanover Square, New York' });
    }
  }

  render() {
    const { address, city } = this.state;
    const { onSubmit, onChange } = this;
    return this.state.wholeAddress === '' ? (
      <div id="container">
        <img src="Logo.png" />
        <form id="input-form" type="submit">
          <div>
            <TextField
              type="text"
              name="address"
              value={address}
              placeholder="    Address"
              onChange={onChange}
              id="outlined-basic"
              // label="    Street Address"
              variant="outlined"
            />
            <TextField
              type="text"
              name="city"
              value={city}
              placeholder="   City"
              onChange={onChange}
              id="outlined-basic"
              // label="    City"
              variant="outlined"
            />
          </div>
          <div>
            <input
              type="radio"
              value="easy"
              name="playType"
              onChange={onChange}
            />
            Easy
            <input
              required
              type="radio"
              value="normal"
              name="playType"
              onChange={onChange}
            />
            Normal
            <input
              required
              type="radio"
              value="demo"
              name="playType"
              onChange={onChange}
            />
            Demo
          </div>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div>
        <StaticImage demo={this.state.demo} />
        <EmbeddedMap />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputAddress: (address, playType) =>
      dispatch(inputAddress(address, playType)),
  };
};

export default connect(null, mapDispatchToProps)(AddressInput);
