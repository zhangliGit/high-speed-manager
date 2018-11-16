import React from 'react';
import Scroll from '../assets/component/Scroll';
import s1 from '../assets/images/s1.png';
import qbIcon from '../assets/images/qbIcon.png';
import ccrIcon from '../assets/images/ccrIcon.png';
import wddpIcon from '../assets/images/wddpIcon.png';
import hyIcon from '../assets/images/hyIcon.png';
import qpIcon from '../assets/images/qpIcon.png';
import jpIcon from '../assets/images/jpIcon.png';
import hlzcIcon from '../assets/images/hlzcIcon.png';
import jdIcon from '../assets/images/jdIcon.png';
import qcpIcon from '../assets/images/qcpIcon.png';
import gtkfIcon from '../assets/images/gtkfIcon.png';
import jpkfIcon from '../assets/images/jpkfIcon.png';
import wxtzIcon from '../assets/images/wxtzIcon.png';
import kfdhIcon from '../assets/images/kfdhIcon.png';
import moreIcon from '../assets/images/moreIcon.png';
import ddIcon from '../assets/images/ddIcon.png';
import personIcon from '../assets/images/personIcon.png';

export default class Person extends React.Component {

  constructor() {
    super();
    this.state = {
      menuList: [
        {
          title: '钱包',
          icon: qbIcon
        },
        {
          title: '乘车人',
          icon: ccrIcon
        },
        {
          title: '我的点评',
          icon: wddpIcon
        },
        {
          title: '好友',
          icon: hyIcon
        }
      ],
      orderList: [
        {
          title: '火车票/抢票',
          icon: qpIcon
        },
        {
          title: '机票',
          icon: jpIcon
        },
        {
          title: '火力专车',
          icon: hlzcIcon
        },
        {
          title: '酒店',
          icon: jdIcon
        },
        {
          title: '汽车票',
          icon: qcpIcon
        }
      ],
      list: [
        {
          title: '高铁客服中心',
          icon: gtkfIcon
        },
        {
          title: '机票客服中心',
          icon: jpkfIcon
        },
        {
          title: '微信通知服务',
          icon: wxtzIcon
        },
        {
          title: '客服电话-反欺诈',
          icon: kfdhIcon
        },
        {
          title: '更多',
          icon: moreIcon
        }
      ]
    }
  }
  render() {
    return (
      <Scroll>
        <div className = "co-bg-0">
          <div className = "co-flex co-ac co-pd-a06" style = {{ padding: "1rem .6rem"}}>
            <div style = { _styles.personIcon}>
              <img src = { personIcon } style = {{width: "3rem", height: "3rem", display: "block"}}  alt = "" />
            </div>
            <div className = "co-f1 co-cl-1 co-mg-l1">
              <div className = "co-fs-1">火火兔</div>
              <div className = "co-fs-01 co-cl-2 co-mg-t04">
                <span>晨曦</span>
                <span>证件尾号9449</span>
              </div>
            </div>
            <div style = { _styles.vip } className = "co-tx-c">
              <div>白银会员</div>
              <div className = "co-fs-01 co-mg-t02">经验值 8767</div>
            </div>
          </div>
          <div className = "co-flex co-ac co-cl-0 co-mg-lr06 co-br-tl1 co-br-tr1" style = {{background: "#f1c760", padding: ".6rem"}}>
            <div className = "co-f1">
              <div className = "">免费光速抢票5次，优先出票</div>
              <div className = "co-fs-01 co-mg-t04">升级黄金 享5大出行福利</div>
            </div>
            <div className = "co-fs-01 co-mg-t02">
              升级黄金会员
            </div>
            <div>
              <i className = "icon iconfont icon-jiantou co-fs-01"></i>
            </div>
          </div>
        </div>
        <div className = "co-flex co-ac co-pd-tb08 co-bg-0">
          {
            this.state.menuList.map((item, index) => {
              return (
                <div key = { index } className = "co-f1 co-flex co-ver co-ac co-jc">
                  <div>
                    <img src = { item.icon } style = {{width: "32px", height: "32px", display: "block"}}  alt = "" />
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
             <img src = { ddIcon } style = {{width: "18px", height: "18px", display: "block"}}  alt = "" />
            </div>
            <div className = "co-f1 co-cl-1 co-mg-l04 co-flex co-jsb co-ac">
              <div className = "">我的订单</div>
              <div className = "co-cl-2 co-fs-01" style = {{marginTop: ".1rem"}}>查看全部订单</div>
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
                    <img src = { item.icon } style = {{width: "26px", height: "26px", display: "block"}}  alt = "" />
                    </div>
                    <div className = "co-fs-01 co-mg-t04" style = {{color: "#333333"}}>
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
                      <img src = { item.icon } style = {{width: "20px", height: "20px", display: "block"}}  alt = "" />
                      <span className = "co-pd-l04 co-fs-01" style = {{color: "#333333"}}>
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