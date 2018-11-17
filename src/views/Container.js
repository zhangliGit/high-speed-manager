import React from 'react';
import Header from '../assets/component/Header';
import Footer from '../components/Footer';
import Ticket from '../components/Ticket';
import Trip from '../components/Trip';
import Service from '../components/Service';
import Person from '../components/Person';
import rcIcon from '../assets/images/rcIcon.png'
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
    let title;
    switch(index) {
      case 0 : title = '首页'
      break
      case 1: title = '我的行程'
      break
      case 2 : title = '旅行服务'
      break
      default : title = '首页'
      break
    }
    this.setState({
      currentIndex: index,
      title: title
    })
  }
  getRit() {
    if (this.state.currentIndex === 1) {
      return (
          <img src = { rcIcon } alt = "" style = {{ width: "20px", height: "20px", display: "block"}} />
      )
    } else {
      return ''
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
        
        <div className = "co-f1 co-flex bgCol">
          { currentPage }
        </div>
        <Footer changePage = { this.changePage.bind(this) } />
      </div>
    )
  }
}