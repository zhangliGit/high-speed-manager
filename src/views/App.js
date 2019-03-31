import React from 'react';
import { Provider } from 'react-redux';
import asyncComponent from './asyncComponent';
import Container from './Container';
import store from '../store/index';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * demo
 */
const Demo = asyncComponent(() => require('./Demo'));

/**
 * 车牌预定
 */
const TicketList = asyncComponent(() => require("./Ticket/TicketList"));
const TicketDetail = asyncComponent(() => require("./Ticket/TicketDetail"));

/**
 * 个人中心
 */
const RiderList = asyncComponent(() => require("./person/RiderList"));
const AddRider = asyncComponent(() => require("./person/AddRider"));
export default class App extends React.Component {
  
  render() {
    return (
      <Provider store = { store }>
        <Router>
          <Switch>
            <Route exact path = "/" component = { Container } />
            <Route exact path = "/TicketList" component = { TicketList } />
            <Route exact path = "/Demo" component = { Demo } />
            <Route exact path = "/TicketDetail" component = { TicketDetail } />
            <Route exact path = "/RiderList" component = { RiderList } />
            <Route exact path = "/AddRider" component = { AddRider } />
          </Switch>
        </Router>
      </Provider>
    )
  }
}