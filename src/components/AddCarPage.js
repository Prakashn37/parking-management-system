import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import CarForm from './CarForm';

class AddCarPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Car</h1>
        <CarForm
          addCar={this.props.addCar}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCar: (car) => dispatch(actions.addCar(car))
});


export default connect(null, mapDispatchToProps)(AddCarPage)
