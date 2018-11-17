import React from 'react'
import Scroll from '../assets/component/Scroll'
import banner from '../assets/images/banner.png'
import PropTypes from 'prop-types'
import hljx from '../assets/images/hljx.png'
import hlzc from '../assets/images/hlzc.png'
import jp from '../assets/images/jp.png'
import jd from '../assets/images/jd.png'
import qcp from '../assets/images/qcp.png'
import zwd from '../assets/images/zwd.png'
import hlpc from '../assets/images/hlpc.png'
import xycx from '../assets/images/xycx.png'
import dc from '../assets/images/dc.png'
import home1 from '../assets/images/home1.png'
import home2 from '../assets/images/home2.png'
import home3 from '../assets/images/home3.png'
import home4 from '../assets/images/home4.png'
import change from '../assets/images/change.png'

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
          title: '伙力精选',
          icon: hljx
        },
        {
          title: '伙力专车',
          icon: hlzc
        },
        {
          title: '机票',
          icon: jp
        },
        {
          title: '酒店',
          icon: jd
        },
        {
          title: '汽车票',
          icon: qcp
        }
      ],
      tabList: [
        {
          title: '正晚点',
          icon: zwd
        },
        {
          title: '火力拼车',
          icon: hlpc
        },
        {
          title: '信用出行',
          icon: xycx
        },
        {
          title: '订餐',
          icon: dc
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
        <div className = "co-flex co-pd-tb04 co-bg-0">
          <ul className = "co-flex" style = {{ width: "100%"}}>
            {
              this.state.scrollList.map((item, index) => {
                return (
                  <li key = { index } className = "co-flex co-f1 co-ver co-jc co-ac">
                    <div className = "co-flex co-jc">
                      <img src = { item.icon } alt = "" style = {{ width: "30px", height: "30px", display: "block"}} />
                    </div>
                    <div className = "co-fs-01 co-mg-t04 co-tx-c" style = {{ color: "#666"}}>{ item.title }</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className = "co-mg-a04 co-pd-a08 co-bg-0" style = {{ borderRadius: "3px", WebkitBorderRadius: "3px" }}>
          <div className = "co-flex co-jsb co-bd-b co-ac co-pd-b08">
            <div className = "co-cl-1 co-fs-3">
              { this.state.sCity }
            </div>
            <div className = "co-cl-1 co-fs-1">
              <img src = { change } alt = ""  style= {{ width: "24px", height: "24px", display: "block"}} />
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
                <div key = { index } className = "co-f1 co-flex co-ver co-ac co-jc co-mg-l04 co-pd-tb04" style = {{ background: "#f8fbff"}}>
                  <div className = "co-flex co-jc">
                    <img src = { item.icon } alt = "" style = {{ width: "30px", height: "30px", display: "block"}} />
                  </div>
                  <div className = "co-fs-01 co-mg-t04 co-tx-c">{ item.title }</div>
                </div>
              )
            })
          }
        </div>
        <div className = "co-mg-t04">
          <img src = { home1 } alt = "" style = { _styles.hImg } />
        </div>
        <div className = "co-mg-t04">
          <img src = { home2 } alt = "" style = { _styles.hImg } />
        </div>
        <div className = "co-mg-t04">
          <img src = { home3 } alt = "" style = { _styles.hImg } />
        </div>
        <div className = "co-mg-t04">
          <img src = { home4 } alt = "" style = { _styles.hImg } />
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
  },
  hImg: {
    width: "100%",
    height: "auto",
    display: "block"
  }
}