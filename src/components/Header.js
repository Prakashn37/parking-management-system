import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import AddCarPage from '../components/AddCarPage';
import CarDashboardPage from '../components/CarDashboardPage'
import CreateLot from '../components/CreateLot'
import HelpPage from '../components/HelpPage';
import { connect } from 'react-redux'
import { setRouteIndex } from '../actions/actions'


function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3, margin: 50 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
  },
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    routeIndex: 0,
  };

  componentDidUpdate(prevProps) {
    this.props.routeIndex != prevProps.routeIndex && this.setState(() => ({
      routeIndex: this.props.routeIndex
    }))
  }

  handleChange = (event, routeIndex) => {
    this.props.setRouteIndex(routeIndex)
  };

  handleChangeIndex = routeIndex => {
    this.props.setRouteIndex(routeIndex)
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.routeIndex}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Add car" />
            <Tab label="Dashboard" />
            <Tab label="Create lot" />
            <Tab label="Help" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.routeIndex}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <AddCarPage />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <CarDashboardPage />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <CreateLot />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <HelpPage />
          </TabContainer>


        </SwipeableViews>
      </div>
    );
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  routeIndex: state.rootReducer.routeIndex
});

const mapDispatchToProps = (dispatch) => ({
  setRouteIndex: (index) =>
    dispatch(setRouteIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(FloatingActionButtonZoom));


// const Header = () => (
//   <header>
//     <h1>Parking lot management</h1>
//     <NavLink to="/" activeClassName="is-active" exact={true}>Add Car</NavLink>
//     <NavLink to="/create" activeClassName="is-active">Create lot</NavLink>
//     <NavLink to="/dashboard" activeClassName="is-active" >Dashboard</NavLink>
//     <NavLink to="/help" activeClassName="is-active">Help</NavLink>
//   </header>
// );

// export default Header;