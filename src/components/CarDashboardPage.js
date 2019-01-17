import React from 'react';
import { connect } from 'react-redux'
import { removeCar } from '../actions/actions'
import CarList from './CarList';

class CarDashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.freeSolts = this.props.lotDetails.filter(e => e == null).length
    this.state = {
      freeSolts: this.freeSolts,
      occupiedSlots: this.props.lotDetails.length - this.freeSolts
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.lotDetails != this.props.lotDetails) {
      let freeSolts = this.props.lotDetails.filter(e => e == null).length
      let occupiedSlots = this.props.lotDetails.length - freeSolts
      if (this.state.occupiedSlots != occupiedSlots || this.state.freeSolts != freeSolts) {
        this.setState(() => ({
          freeSolts,
          occupiedSlots
        }))
      }
    }
  }
  render() {
    return (
      <div>
        {
          this.props.lotDetails.length ?
            <React.Fragment>
              <h1>Free slots {this.state.freeSolts}</h1>
              <h1>Occupied slots {this.state.occupiedSlots}</h1>
              <CarList removeCar={this.props.removeCar} list={this.props.lotDetails} />
            </React.Fragment>
            :
            <React.Fragment>
              <h1>Lot details not available</h1>
              <h3>You may be viewing this message if the lot is not created yet</h3>
            </React.Fragment>}
      </div>
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
