import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import moment from 'moment'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});


const CarListItem = (props) => {
    return (
        <div>
            <ListItem>
                <Avatar>
                    <FontAwesomeIcon icon={faCar} color={props.color} style={{ backgroundColor: '#f6f6f6' }} />
                </Avatar>
                <ListItemText primary={props.registration} secondary={moment(props.time).startOf('hour').fromNow()} />
                <ListItemText primary={`Slot number : ${props.slotNo}`} />
                <Button onClick={() => { props.removeCar(props.bookingId) }} variant="contained" color="primary">
                    Remove
          </Button>
            </ListItem>
            <li>
                <Divider variant="inset" />
            </li>

        </div>
    );
};


export default withStyles(styles)(CarListItem);