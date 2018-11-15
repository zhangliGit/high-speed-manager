import React from 'react';
import Scroll from './Scroll';
import s1 from '../assets/images/s1.png';

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
      ],
      orderList: [
        {
          title: '火车票/抢票',
          icon: ''
        },
        {
          title: '机票',
          icon: ''
        },
        {
          title: '火力专车',
          icon: ''
        },
        {
          title: '酒店',
          icon: ''
        },
        {
          title: '汽车票',
          icon: ''
        }
      ],
      list: [
        {
          title: '高铁客服中心',
          icon: ''
        },
        {
          title: '机票客服中心',
          icon: ''
        },
        {
          title: '微信通知服务',
          icon: ''
        },
        {
          title: '客服电话-反欺诈',
          icon: ''
        },
        {
          title: '更多',
          icon: ''
        }
      ]
    }
  }
  render() {
    return (
      <Scroll>
        <div className = "co-flex co-ac co-pd-a06 co-bg-0 co-bd-b" style = {{ padding: "1rem .6rem"}}>
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
                  <div className = "co-mg-t04 co-cl-1 co-fs-01">{ item.title }</div>
                </div>
              )
            })
          }
        </div>
        <div>
          <img src = { s1 } alt = "" style = { _styles.imgScorll }  />
        </div>
        <div className = "co-bg-0 co-bd-t">
          <div className = "co-flex co-ac co-pd-a05">
            <div>
              <i className = "icon iconfont icon-service co-fs-2 co-cl-1"></i>
            </div>
            <div className = "co-f1 co-cl-1 co-mg-l04 co-flex co-jsb co-ac">
              <div className = "">我的订单</div>
              <div className = "co-cl-2 co-fs-01 co-mg-t02">查看全部订单</div>
            </div>
            <div className = "co-mg-l02">
              <i className = "icon iconfont icon-jiantou co-fs-01 co-cl-2"></i>
            </div>
          </div>
          <div className = "co-flex co-pd-tb1">
            {
              this.state.orderList.map((item, index) => {
                return (
                  <div key = { index } className = "co-f1 co-flex co-ver co-ac co-jc">
                    <div>
                      <i className = "icon iconfont icon-service co-fs-2 co-cl-1"></i>
                    </div>
                    <div className = "co-fs-01 co-mg-t04">
                      { item.title }
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className = "co-bd-t">
            {
              this.state.list.map((item, index) => {
                return (
                  <div key = { index } className = "co-flex co-ac co-pd-a06  co-jsb">
                    <div className = "co-flex co-ac">
                      <i className = "icon iconfont icon-kefu co-fs-2 co-cl-2"></i>
                      <span className = "co-pd-l04 co-fs-01">
                        { item.title }
                      </span> 
                    </div>
                    <div>
                      <i className = "icon iconfont icon-jiantou co-fs-01 co-cl-2"></i>
                    </div>
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
  },
  imgScorll: {
    width: "100%",
    height: "auto",
    display: "block"
  }
}