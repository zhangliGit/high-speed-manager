import React from 'react'
import Scroll from './Scroll'

export default class Service extends React.Component {

  constructor() {
    super();
    this.state = {
      serList: [
        {
          title: '酒店预订',
          tip: '收单送50',
          icon: 'icon-jiudian'
        },
        {
          title: '航班动态',
          tip: '延误提醒',
          icon: 'icon-icon-test'
        },
        {
          title: '企业服务',
          tip: '高效便捷',
          icon: 'icon-ren'
        }
      ],
      manList: [
        {
          title: '出行装备',
          icon: 'icon-lvxingxiang'
        },
        {
          title: '积分兑换',
          icon: 'icon-liwu-'
        },
        {
          title: '火车订餐',
          icon: 'icon-diancan'
        },
        {
          title: '出境游',
          icon: 'icon-guojijipiao'
        },
        {
          title: '福利中心',
          icon: 'icon-fuli'
        },
        {
          title: '信用卡',
          icon: 'icon-xinyongqia'
        }
      ]
    }
  }

  render() {
    return (
      <Scroll>
        <div className = "co-bg-0">
          <div className = "co-pd-a08 co-bd-b">出行服务</div>
          <div className = "co-flex co-pd-tb06">
            {
              this.state.serList.map((item, index) => {
                return (
                  <div key = { index } className = "co-f1 co-flex co-ver co-ac co-jc">
                    <div>
                      <i className = { `icon iconfont co-fs-3 ${item.icon}`}></i>
                    </div>
                    <div className = "co-cl-1 co-mg-t02">{ item.title }</div>
                    <div className = "co-fs-02 co-cl-2 co-mg-t02">{ item.tip }</div>
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
                       <i className = { `icon iconfont co-fs-3 ${item.icon}`}></i>
                    </div>
                    <div className = "co-mg-t02 co-cl-1">{item.title}</div>
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