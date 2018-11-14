import React from 'react'
import Scroll from './Scroll'
export default class Trip extends React.Component {

  render() {
    return (
      <Scroll>
        <div className = "co-flex co-pd-tb08 mainBg co-cl-0">
          <div className = "co-f1 co-flex co-ver co-ac co-jc">
            <div>
              <i className = "icon iconfont icon-shikebiao co-fs-5"></i>
            </div>
            <div className = "co-fs-02 co-mg-t04">时刻表/正晚点</div>          
          </div>
          <div className = "co-f1 co-flex co-ver co-ac co-jc">
            <div>
              <i className = "icon iconfont icon-diancan co-fs-5"></i>
            </div>
            <div className = "co-fs-02 co-mg-t04">车厢点餐</div>          
          </div>
          <div className = "co-f1 co-flex co-ver co-ac co-jc">
            <div>
              <i className = "icon iconfont icon-icon-test co-fs-5"></i>
            </div>
            <div className = "co-fs-02 co-mg-t04">高铁延误宝</div>          
          </div>
          <div className = "co-f1 co-flex co-ver co-ac co-jc">
            <div>
              <i className = "icon iconfont icon-screen co-fs-5"></i>
            </div>
            <div className = "co-fs-02 co-mg-t04">车站大屏</div>          
          </div>
        </div>
        <div>
          <div className = "co-flex co-pd-a06 co-bg-0 co-bd-b">
            <div style = {{width: "5rem", height: "4rem", background: "#444"}}>
            </div>
            <div className = "co-f1 co-mg-l06">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </Scroll>
    )
  }
}
