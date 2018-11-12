import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ticket from '../components/Ticket';
import Trip from '../components/Trip';
import Service from '../components/Service';
import Person from '../components/Person';
import PropTypes from 'prop-types'

export default class Container extends React.Component {

  static childContextTypes = {
    props: PropTypes.object,
    setTitle: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      title: '首页'
    }
  }
  getChildContext() {
    return {
      props: { ...this.props },
      setTitle: () => this.setTitle()
    }
  }
  changePage(index) {
    this.setState({
      currentIndex: index
    })
  }
  setTitle() {
    this.setState({
      title: '我改变了'
    })
  }
  render() {
    let type = this.state.currentIndex, currentPage;
    if (type === 0) {
      currentPage = <Ticket haha = "hah" />
    } else if (type === 1) {
      currentPage = <Trip />
    } else if (type === 2) {
      currentPage = <Service />
    } else {
      currentPage = <Person />
    }
    return (
      <div className ="co-f1 co-flex co-ver">
        <Header title = { this.state.title } />
        <div className = "co-f1 co-bg-0 co-flex">
          { currentPage }
        </div>
        <Footer changePage = { this.changePage.bind(this) } />
      </div>
    )
  }
}