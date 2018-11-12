import React from 'react'
import Header from '../../components/Header'
import Scroll from '../../components/Scroll'
import TList from '../../components/TList'

export default class TicketList extends React.Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className ="co-f1 co-flex co-ver">
        <Header title = "火车票"></Header>
        <Scroll>
            <TList />
        </Scroll>
      </div>
    )
  }

}