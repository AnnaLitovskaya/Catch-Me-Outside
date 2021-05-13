import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputAddress } from '../store/storeComponents/inputAddress';
import Stopwatch from './Stopwatch';

class AddressInput extends Component {
  constructor() {
    super();
    this.state = {
      wholeAddress: '',
      address: '',
      city: '',
      playType: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    if (evt.target.name === 'playType') {
      if (evt.target.value === 'normal') {
        evt.target.value = 500;
      } else {
        evt.target.value = 250;
      }
    }
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const wholeAddress = `${this.state.address}, ${this.state.city}`;
    this.setState({ wholeAddress });
    this.props.inputAddress(wholeAddress, this.state.playType);
  }

  render() {
    const { address, city } = this.state;
    const { onSubmit, onChange } = this;
    return this.state.wholeAddress === '' ? (
      <div>
        <form type="submit">
          <input
            required
            type="text"
            name="address"
            value={address}
            placeholder="Address"
            onChange={onChange}
          />
          <input
            required
            type="text"
            name="city"
            value={city}
            placeholder="City"
            onChange={onChange}
          />
          <div>
            <input
              type="radio"
              value="easy"
              name="playType"
              onChange={onChange}
            />
            Easy
            <input
              type="radio"
              value="normal"
              name="playType"
              onChange={onChange}
            />
            Normal
            <input
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
      <Stopwatch />
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
