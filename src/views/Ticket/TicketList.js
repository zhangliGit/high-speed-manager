import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../assets/component/Header';
import TList from '../../components/TList'
import FList from '../../components/FList'
import { Tabs } from 'antd-mobile';
import PropTyps from 'prop-types';
import { ticketList } from '../../store/action/ticket'

class TicketList extends React.Component {
  static contextTypes = {
    router: PropTyps.object.isRequired
  }
  constructor(props, context) {
    super();
    console.log(context);
    this.state = {
      currentIndex: 0
    }
  }
  componentDidMount() {
    this.props.actions.ticketList();
  }

  render() {
    const tabs = [
      { title: '火车票' },
      { title: '飞机票' },
    ];
    return (
      <div className ="co-flex co-ver co-Page">
        <Header title = "火车票" isBack></Header>
        <div className = "">
          <Tabs 
          tabs = {tabs}
          onTabClick={(tab, index) => { console.log(index); this.setState({ currentIndex: index})}}
          >
          </Tabs>
        </div>
        {
          this.state.currentIndex === 0 ?
          <TList list = { this.props.list } { ...this.props.history } />
          :
          <FList list = { this.props.list } { ...this.props.history } />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.ticket.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ticketList }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
