import React from 'react'
import Scroll from './Scroll'
export default class Trip extends React.Component {

  constructor() {
    super();
    this.state = {
      list: [
        {
          title: '时刻表/正晚点',
          icon: 'icon-shikebiao'
        },
        {
          title: '车厢点餐',
          icon: 'icon-diancan'
        },
        {
          title: '高铁延误宝',
          icon: 'icon-icon-test'
        },
        {
          title: '车次大屏',
          icon: 'icon-screen'
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
                    <i className = { `icon iconfont ${item.icon} co-fs-4` }></i>
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
        </div>
      </Scroll>
    )
  }
}
