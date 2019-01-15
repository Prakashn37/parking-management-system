import React from 'react';
import { Redirect } from 'react-router-dom'


export default class CarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registration: '',
      color: 'black',
      error: ''
    };
  }
  onRegistrationChange = (e) => {
    const registration = e.target.value;
    this.setState(() => ({ registration }));
  };
  onColorChange = (e) => {
    const color = e.target.value;
    console.log(color);
    this.setState(() => ({ color }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const buf = this.state.registration;
    if (!buf || !buf.match(/^[a-zA-Z]{2}-\d{2}-[a-zA-Z]{2}-\d{4}$/)) {
      const error = 'Please provide Registration number in valid format';
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.addCar({
        registration: this.state.registration.toUpperCase(),
        color: this.state.color
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Registration"
            autoFocus
            value={this.state.registration}
            onChange={this.onRegistrationChange}
          />
          <select onChange={this.onColorChange}>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>
          <button>Get parking slot</button>
        </form>
      </div>
    );
  }
}
