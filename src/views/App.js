import React from 'react';
import { Provider } from 'react-redux';
import Container from './Container'
import TicketList from './Ticket/TicketList'
import TicketDetail from './Ticket/TicketDetail'
import store from '../store/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
  
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <Switch>
              <Route exact path = "/" component = { Container } />
              <Route exact path = "/TicketList" component = { TicketList } />
              <Route exact path = "/TicketDetail" component = { TicketDetail } />
            </Switch>
        </Router>
      </Provider>
    )
  }
}