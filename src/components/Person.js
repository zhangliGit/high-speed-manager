import React from 'react'
import Scroll from './Scroll'

export default class Person extends React.Component {

  constructor() {
    super();
    this.state = {
      menuList: [
        {
          title: '钱包',
          icon: 'icon-qianbao'
        },
        {
          title: '乘车人',
          icon: 'icon-ren'
        },
        {
          title: '我的点评',
          icon: 'icon-fuwudianping'
        },
        {
          title: '好友',
          icon: 'icon-haoyou'
        }
      ]
    }
  }
  render() {
    return (
      <Scroll>
        <div className = "co-flex co-ac co-pd-a06 co-bg-0 co-bd-b">
          <div style = { _styles.personIcon}>

          </div>
          <div className = "co-f1 co-cl-1 co-mg-l05">
            <div className = "co-fs-1">火火兔</div>
            <div className = "co-fs-01 co-mg-t02">
              <span>晨曦</span>
              <span>证件尾号9449</span>
            </div>
          </div>
          <div style = { _styles.vip } className = "co-tx-c">
            <div>白银会员</div>
            <div className = "co-fs-01 co-mg-t02">经验值 8767</div>
          </div>
        </div>
        <div className = "co-flex co-ac co-pd-tb08 co-bg-0">
          {
            this.state.menuList.map((item, index) => {
              return (
                <div key = { index } className = "co-f1 co-flex co-ver co-ac co-jc">
                  <div>
                    <i className = { `co-fs-3 icon iconfont ${item.icon}`}></i>
                  </div>
                  <div className = "co-mg-t04 co-cl-1">{ item.title }</div>
                </div>
              )
            })
          }
        </div>
        <div className = "co-mg-t04 co-bg-0">
          <div className = "co-flex co-ac co-pd-a05">
            <div>
              <i className = "icon iconfont icon-chuangxinjingxuan co-fs-3 co-cl-1"></i>
            </div>
            <div className = "co-f1 co-cl-1">我的订单</div>
            <div className = "co-fs-01 co-cl-2">查看全部订单</div>
            <div className = "co-mg-l02">
              <i className = "icon iconfont icon-jiantou co-fs-01 co-cl-2"></i>
            </div>
          </div>
        </div>
      </Scroll>
    )
  }
}
const _styles = {
  personIcon: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "100%",
    background: "#ccc"
  },
  vip: {
    borderRadius: "20px",
    background: "#ACAFB4",
    padding: ".3rem .8rem",
    color: "#f5f5f5",
    transform: "scale(.9)"
  }
}