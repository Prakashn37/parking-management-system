import React from 'react';
import { connect } from 'react-redux'
import { removeCar } from '../actions/actions'

import CarList from './CarList';

class CarDashboardPage extends React.Component {
  render() {
    return (
      <CarList removeCar={this.props.removeCar} list={this.props.lotDetails} />
    )
  }
}

const mapStateToProps = (state) => ({
  lotDetails: state.rootReducer.lotDetails
});

const mapDispatchToProps = (dispatch) => ({
  removeCar: (bookingId) =>
    dispatch(removeCar(bookingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDashboardPage);
