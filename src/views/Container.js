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

   // 申明context类型
   // 需要传递的变量需要在这里定义，否则会报错
  static childContextTypes = {
    props: PropTypes.object,
    name: PropTypes.string,
    getName: PropTypes.func,
    arrList: PropTypes.array
  }

  constructor(props, context) {
    super(props, context);
    console.log('---');
    console.log(props, context);
    console.log('---');
    this.state = {
      currentIndex: 0,
      title: '首页'
    }
  }
  // 定义context需要实现的方法
  getChildContext() {
    return {
      props: { ...this.props },
      name: 'zhangli',
      getName: () => {
        return 'haha'
      },
      arrList: [1,2,3]
    }
  }
  componentDidMount() {
    this.refs.person.style.height = `${window.screen.height - this.refs.footer.offsetHeight}px`
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
      case 3:
      break
      default : title = '首页'
      break
    }
    this.setState({
      currentIndex: index,
      title: title
    })
  }
  goDemo () {
    console.log(this.props)
    this.props.history.push('/Demo')
  }
  getRit() {
    if (this.state.currentIndex === 1) {
      return (
          <img src = { rcIcon } alt = "" style = {{ width: "20px", height: "20px", display: "block"}} />
      )
    } else if (this.state.currentIndex === 0) {
      return (
        <span onClick = {() => this.goDemo()}>示例</span>
      )
    }
  }
  render() {
    let type = this.state.currentIndex;
    const comList = [<Ticket { ...this.state } />, <Trip  />, <Service  />, <Person  />]
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
          {
            comList.map((item, index) => {
              return (
                <div key = { index } ref = { index === 3 ? "person" : "" } className = { `co-flex contanierD ${type === index ? "contanier-in" : "contanier-out"}`} >{ item }</div>
              )
            })
          }
        </div>
        <div ref = "footer">
          <Footer changePage = { this.changePage.bind(this) } />
        </div>
      </div>
    )
  }
}
