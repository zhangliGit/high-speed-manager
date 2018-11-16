import React from 'react'
import Scroll from '../assets/component/Scroll'
import jdydIcon from '../assets/images/jdydIcon.png'
import hbdtIcon from '../assets/images/hbdtIcon.png'
import qyfwIcon from '../assets/images/qyfwIcon.png'
import cxzbIcon from '../assets/images/cxzbIcon.png'
import jfdhIcon from '../assets/images/jfdhIcon.png'
import hcdcIcon from '../assets/images/hcdcIcon.png'
import cjyIcon from '../assets/images/cjyIcon.png'
import flzxIcon from '../assets/images/flzxIcon.png'
import xykIcon from '../assets/images/xykIcon.png'

export default class Service extends React.Component {

  constructor() {
    super();
    this.state = {
      serList: [
        {
          title: '酒店预订',
          tip: '收单送50',
          icon: jdydIcon
        },
        {
          title: '航班动态',
          tip: '延误提醒',
          icon: hbdtIcon
        },
        {
          title: '企业服务',
          tip: '高效便捷',
          icon: qyfwIcon
        }
      ],
      manList: [
        {
          title: '出行装备',
          icon: cxzbIcon
        },
        {
          title: '积分兑换',
          icon: jfdhIcon
        },
        {
          title: '火车订餐',
          icon: hcdcIcon
        },
        {
          title: '出境游',
          icon: cjyIcon
        },
        {
          title: '福利中心',
          icon: flzxIcon
        },
        {
          title: '信用卡',
          icon: xykIcon
        }
      ]
    }
  }

  render() {
    return (
      <Scroll>
        <div className = "co-bg-0">
          <div className = "co-pd-a06 co-bd-b">出行服务</div>
          <div className = "co-flex co-pd-tb06">
            {
              this.state.serList.map((item, index) => {
                return (
                  <div key = { index } className = "co-f1 co-flex co-ver co-ac co-jc">
                    <div>
                      <img src = { item.icon } style = {{width: "34px", height: "34px", display: "block"}}  alt = "" />
                    </div>
                    <div className = "co-cl-1 co-fs-01 co-mg-t04">{ item.title }</div>
                    <div className = "co-fs-02 co-cl-2 co-mg-t02" style = {{transform: "scale(.9)"}}>{ item.tip }</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className = "co-bg-0 co-mg-t06">
          <div className = "co-pd-a06 co-bd-b">管家自营</div>
          <div className = "co-pd-tb08 co-of">
            {
              this.state.manList.map((item, index) => {
                return (
                  <div key = { index } className = "co-flex co-ver co-ac co-jc" style = { _styles.tabList }>
                    <div>
                    <img src = { item.icon } style = {{width: "32px", height: "32px", display: "block"}}  alt = "" />
                    </div>
                    <div className = "co-mg-t04 co-fs-01 co-cl-1">{item.title}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Scroll>
    )
  }
}

const _styles = {
  tabList: {
    float: "left",
    width: "33.33%",
    padding: ".5rem 0"
  }
}