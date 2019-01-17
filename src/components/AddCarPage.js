import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import CarForm from './CarForm';

class AddCarPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.lotDetails)
  }
  render() {
    return (
      <div>
        {this.props.lotDetails.length ?
          <React.Fragment>
            <h1>Add Car</h1>
            <CarForm
              {...this.props}
            />
          </React.Fragment>
          :
          <React.Fragment>
            <h1>Create a lot to add car</h1>
          </React.Fragment>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lotDetails: state.rootReducer.lotDetails
});

const mapDispatchToProps = (dispatch) => ({
  addCar: (car) => dispatch(actions.addCar(car)),
  setRouteIndex: (index) => dispatch(actions.setRouteIndex(index))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddCarPage)
