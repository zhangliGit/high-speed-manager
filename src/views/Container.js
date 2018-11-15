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
      props: { ...this.props }
    }
  }
  changePage(index) {
    this.setState({
      currentIndex: index
    })
  }
  getRit() {
    if (this.state.currentIndex === 1) {
      return (
        <i className = "icon iconfont icon-icon-test co-cl-0 co-fs-2"></i>
      )
    }
  }
  render() {
    let type = this.state.currentIndex, currentPage;
    if (type === 0) {
      currentPage = <Ticket />
    } else if (type === 1) {
      currentPage = <Trip />
    } else if (type === 2) {
      currentPage = <Service />
    } else {
      currentPage = <Person />
    }
    return (
      <div className ="co-flex co-ver co-Page">
        {
          this.state.currentIndex !== 3 ?
          <Header title = { this.state.title } 
            ritBtn = { this.getRit() }
          />
          :
          ''
        }
        
        <div className = "co-f1 co-bg-0 co-flex">
          { currentPage }
        </div>
        <Footer changePage = { this.changePage.bind(this) } />
      </div>
    )
  }
}