import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddCarPage from '../components/AddCarPage';
import CarDashboardPage from '../components/CarDashboardPage'
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import CreateLot from '../components/CreateLot';

const AppRouter = () => (
  // <BrowserRouter>
  //   <div>
  //     <Header />
  //     <Switch>
  //       <Route path="/" component={AddCarPage} exact={true} />
  //       <Route path="/create" component={CreateLot}/>
  //       <Route path="/dashboard" component={CarDashboardPage} />
  //       <Route path="/help" component={HelpPage} />
  //       <Route component={NotFoundPage} />
  //     </Switch>
  //   </div>
  // </BrowserRouter>
  <Header />
);

export default AppRouter;
