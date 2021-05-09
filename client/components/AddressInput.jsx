import React, { Component } from 'react';

class AddressInput extends Component {
  constructor() {
    super();
    this.state = {
      wholeAddress: '',
      address: '',
      city: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const wholeAddress = `${this.state.address}, ${this.state.city}`;
    this.setState({ wholeAddress });
  }

  render() {
    const { address, city } = this.state;
    const { onSubmit, onChange } = this;
    return (
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
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddressInput;
