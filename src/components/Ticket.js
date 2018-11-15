import React from 'react'
import Scroll from './Scroll'
import banner from '../assets/images/banner.png'
import LevelScroll from '../assets/component/LevelScroll'
import PropTypes from 'prop-types'

export default class Ticket extends React.Component {
  static contextTypes = {
    props: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
      sCity: '武汉',
      eCity: '广州',
      scrollList: [
        {
          title: '正晚点',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '火力拼车',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '信用出行',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '订餐',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '信用出行',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '订餐',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '信用出行',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '订餐',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '信用出行',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '订餐',
          icon: 'icon-icon-chujingxianlu'
        }
      ],
      tabList: [
        {
          title: '正晚点',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '火力拼车',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '信用出行',
          icon: 'icon-icon-chujingxianlu'
        },
        {
          title: '订餐',
          icon: 'icon-icon-chujingxianlu'
        }
      ]
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
        <div className = "co-flex co-pd-tb02 co-bg-0">
          <LevelScroll>
            <ul style = { _styles.container }>
              {
                this.state.scrollList.map((item, index) => {
                  return (
                    <li key = { index } style = { _styles.scrollList } className = "co-flex co-ver co-jc co-ac">
                      <i className = { `icon iconfont icon-dache co-fs-4 ${item.icon}` }></i>
                      <div className = "co-fs-01 co-mg-t04 co-tx-c">{ item.title }</div>
                    </li>
                  )
                })
              }
            </ul>
          </LevelScroll>
        </div>
        <div className = "co-mg-a04 co-pd-a08 co-bg-0" style = {{ borderRadius: "3px", WebkitBorderRadius: "3px" }}>
          <div className = "co-flex co-jsb co-bd-b co-ac co-pd-b08">
            <div className = "co-cl-1 co-fs-3">
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
        <div className = "co-mg-t04 co-bg-0 co-pd-tb02 co-flex co-cl-1 co-jc co-pd-r04">
          {
            this.state.tabList.map((item, index) => {
              return (
                <div key = { index } className = "co-bg-1 co-f1 co-flex co-ver co-ac co-jc co-mg-l04 co-pd-tb04" style = {{ background: "#f5f5f5"}}>
                  <i className = { `icon iconfont icon-dache co-fs-4 ${item.icon}` }></i>
                  <div className = "co-fs-01 co-mg-t04 co-tx-c">{ item.title }</div>
                </div>
              )
            })
          }
        </div>
      </Scroll>
    )
  }
}

const _styles = {
  container: {
    whiteSpace: "nowrap",
    display: "inline-block"
  },
  scrollList: {
    padding: "0.2rem 1rem",
    display: "inline-block"
  },
  banner: {
    width: "100%",
    height: "auto",
    background: "#333"
  }
}