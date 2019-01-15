import React from 'react';
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'




const CarListItem = (props) => {
    return (
        <div>
            <p>{props.registration}</p>
            <Button onClick={() => { props.removeCar(props.bookingId) }} variant="contained" color="primary">
                Remove
          </Button>
            <FontAwesomeIcon icon={faCar} color={props.color} style={{ backgroundColor: '#f6f6f6' }} />


        </div>
    );
};

export default CarListItem;