import React from 'react'
import Scroll from '../assets/component/Scroll'
import skb from '../assets/images/skb.png'
import cxdc from '../assets/images/cxdc.png'
import gtywb from '../assets/images/gtywb.png'
import czdp from '../assets/images/czdp.png'
import pic1 from '../assets/images/pic1.png'
export default class Trip extends React.Component {

  constructor() {
    super();
    this.state = {
      list: [
        {
          title: '时刻表/正晚点',
          icon: skb
        },
        {
          title: '车厢点餐',
          icon: cxdc
        },
        {
          title: '高铁延误宝',
          icon: gtywb
        },
        {
          title: '车站大屏',
          icon: czdp
        }
      ]
    }
  }

  render() {
    return (
      <Scroll>
        <div className = "co-flex co-pd-tb08 mainBg co-cl-0">
          {
            this.state.list.map((item, index) => {
              return (
                <div key = { index } className = "co-f1 co-flex co-ver co-ac co-jc">
                  <div>
                  <img src = { item.icon } alt = "" style = {{ width: "34px", height: "34px", display: "block"}} />
                  </div>
                  <div className = "co-fs-02 co-mg-t04">{ item.title}</div>      
                </div>
              )
            })
          }
        </div>
        <div>
          <div className = "co-flex co-pd-a06 co-bg-0 co-bd-b">
            <div style = {{width: "5rem", height: "4rem", background: "#444"}}>
            </div>
            <div className = "co-f1 co-mg-l06 co-flex co-ver">
              <div className = "co-te-2 co-cl-1">6条高铁已经被开通了，您以后的行程将会非常的方便哈哈</div>
              <div className = "co-f1 co-flex co-ac co-cl-2 co-fs-01">快来看看您的家乡会怎么样</div>
              <div className = "co-flex co-jsb co-fs-01">
                <div>干货</div>
                <div>21920</div>
              </div>
            </div>
          </div>
          <div className = "co-flex co-pd-a06 co-bg-0 co-bd-b">
            <div >
              <img src = { pic1 } style = {{width: "5rem", height: "4rem", background: "#444"}}  alt = "" />
            </div>
            <div className = "co-f1 co-mg-l06 co-flex co-ver">
              <div className = "co-te-2" style = {{ color: "#333"}}>6条高铁已经被开通了，您以后的行程将会非常的方便哈哈</div>
              <div className = "co-f1 co-flex co-ac co-cl-2 co-fs-01">快来看看您的家乡会怎么样</div>
              <div className = "co-flex co-jsb co-ac co-fs-01">
                <div style = { _styles.tip }>干货</div>
                <div className = "co-flex co-ac" style = {{ color: "#c3c3c3"}}>
                  <div  style = {{}}><i className = "icon iconfont icon-yanjing"></i></div>
                  <div style = {{ margin: "3px 3px 0"}}>1990</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scroll>
    )
  }
}

const _styles = {
  tip: {
    padding: "0px 8px",
    height: "24px",
    lineHeight: "22px",
    borderRadius: "3px",
    border: "1px #7ed321 solid",
    color: "#7ed321",
    fontSize: "10px",
    transform: "scale(.9)"
  }
}