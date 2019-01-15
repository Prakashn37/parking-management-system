import React from 'react';
import { createRandomRegistrationNumber, chooseRandomColor } from '../randomGenerators';
import * as actions from '../actions/actions'
import { connect } from 'react-redux'

class CreateLot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSlots: 0,
            occupiedSlots: 0,
            slotDetails: [],
            error: ''
        }
    }
    onTotalChange = (e) => {
        const totalSlots = e.target.value;
        this.setState(() => ({ totalSlots, error: '' }));
    };
    onOccupiedChange = (e) => {
        const occupiedSlots = e.target.value;
        this.setState(() => ({ occupiedSlots, error: '' }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.totalSlots > 1000) {
            this.setState(() => ({
                error: 'Slots cannot be more than thousand'
            }))
        }
        else if (this.state.totalSlots < this.state.occupiedSlots) {
            this.props.createPrefilledLot(this.state.totalSlots, this.state.occupiedSlots)
        }
        else {
            let error = 'Arithmetically not possible';
            this.setState({ error });
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='number'
                        placeholder="No of slots"
                        autoFocus
                        onChange={this.onTotalChange}
                    />
                    <input
                        type="number"
                        placeholder="Occupied slots"
                        onChange={this.onOccupiedChange}
                    />
                    <input type="submit" value={'Generate parking lot'} />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createPrefilledLot: (totalSlots, occupiedSlots) =>
        dispatch(actions.createLotPrefilled(totalSlots, occupiedSlots))
});



export default connect(null, mapDispatchToProps)(CreateLot);