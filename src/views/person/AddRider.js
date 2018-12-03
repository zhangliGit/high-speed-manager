import React from 'react';
import Header from '../../assets/component/Header';
export default class AddRider extends React.Component {
 
  render() {
    return (
      <div className ="co-flex co-ver co-Page">
        <Header title = "火车票" isBack></Header>
        <div className = "co-f1">
          <div className="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
            <div>姓名</div>
            <div className = "co-f1">
            </div>
          </div>
          <div className="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
            <div>证件类型</div>
            <div className = "co-f1 co-tx-r co-cl-3">
            </div>
            <div className="co-mg-l04">
              <i className="icon iconfont icon-jiantou"></i>
            </div>
          </div>
          <div className="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
            <div>证件号码</div>
            <div className = "co-f1">
            </div>
          </div>
          <div className="co-mg-a08 co-bg-6 co-pd-a06 co-br-a0 co-tx-c co-cl-0">添加</div>
        </div>
      </div>
    )
  }
}
