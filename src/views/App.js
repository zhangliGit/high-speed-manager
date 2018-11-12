import React from 'react';
import { Provider } from 'react-redux';
import Container from './Container'
import TicketList from './Ticket/TicketList'
import store from '../store/index';
import { HashRouter, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
  
  render() {
    return (
      <Provider store = { store }>
        <HashRouter>
          <div className = "co-Page co-flex co-of">
            <Switch>
              <Route exact path = "/" component = { Container } />
              <Route path = "/TicketList" component = { TicketList } />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}