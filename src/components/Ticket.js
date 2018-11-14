import React from 'react'
import Scroll from './Scroll'
import banner from '../assets/images/banner.png'
import tabImg from '../assets/images/tabImg.png'
import tabImg1 from '../assets/images/tabImg1.png'
import PropTypes from 'prop-types'

export default class Ticket extends React.Component {
  static contextTypes = {
    props: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
      sCity: '武汉',
      eCity: '广州'
    }
  }

  ticketList() {
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
        <div>
          <img style = { _styles.banner } src = { banner } alt = "" />
        </div>
        <div>
          <img style = { _styles.banner } src = { tabImg } alt = "" />
        </div>
        <div className = "co-mg-a04 co-pd-a08 co-bg-0" style = {{ borderRadius: "3px", WebkitBorderRadius: "3px" }}>
          <div className = "co-flex co-jsb co-bd-b co-ac co-pd-b08">
            <div className = "co-cl-1 co-fs-3">s
              { this.state.sCity }
            </div>
            <div className = "co-cl-1 co-fs-1">
              <i className = "icon iconfont icon-ziyuanldpi"></i>
            </div>
            <div className = "co-cl-1 co-fs-3">
              { this.state.eCity }
            </div>
          </div>
          <div className = "co-flex co-jsb co-pd-tb1">
            <div className = "co-flex co-ac">
              <span className = "co-cl-2 co-fs-1">11月13日</span>
              <span className = "co-cl-2 co-pd-l05">星期五</span>
            </div>
            <div>学生</div>
          </div>
          <div onClick = { this.ticketList.bind(this) } className = "co-pd-a06 co-br-a0 co-f1 co-tx-c co-cl-0 " style = {{ background: "#4889db" }}>搜索</div>
        </div>
        <div>
          <img style = { _styles.banner } src = { tabImg1 } alt = "" />
        </div>
      </Scroll>
    )
  }
}

const _styles = {
  banner: {
    width: "100%",
    height: "auto",
    background: "#333"
  }
}