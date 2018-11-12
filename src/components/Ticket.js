import React from 'react'
import Scroll from './Scroll'
import PropTypes from 'prop-types'

export default class Ticket extends React.Component {
  static contextTypes = {
    props: PropTypes.object.isRequired,
    setTitle: PropTypes.func
  }

  ticketList() {
    this.context.setTitle();
    this.context.props.history.push({
      pathname: '/TicketList',
      state: {
        startTime: '',
        endTime: ''
      }
    })
  }
  render() {
    return (
      <Scroll>
        <div style = { _styles.banner }>
        </div>
        <div className = "co-flex co-pd-tb06">
          <div onClick = { this.ticketList.bind(this) } className = "co-pd-a06 co-mg-a08 co-br-a0 co-f1 co-tx-c co-cl-0 " style = {{ background: "#4889db" }}>搜索火车票</div>
        </div>
      </Scroll>
    )
  }
}

const _styles = {
  banner: {
    width: "100%",
    height: "4rem",
    background: "#333"
  }
}