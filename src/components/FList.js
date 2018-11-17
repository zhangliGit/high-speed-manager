import React from 'react'
import Scroll from '../assets/component/Scroll'
export default class TList extends React.Component {

  render() {
    return (
      <Scroll>
        <div className = "co-pd-a02">
          {
            this.props.list.map((item, index) => {
              return (
                  <div className = "co-bg-0 co-pd-a04 co-mg-b02"  key = { index }>
                    <div className = "co-flex co-pd-tb04 co-ac">
                      <div className = "co-f1 co-fs-2 co-cl-7">{ item.sTime.substring(0, 5) }</div>
                      <div className = "co-f1 co-tx-c co-cl-1 co-fs-01">-- { item.needHour }时{ item.needMin }分 --</div>
                      <div className = "co-f1 co-fs-2 co-tx-r co-cl-7">{ item.eTime.substring(0, 5) }</div>
                      <div style = { _styles.slideRit }>￥{ item.money }</div>
                    </div>
                    <div className = "co-flex co-pd-tb04 co-cl-2 co-fs-01">
                      <div className = "co-f1">{ item.sCity }</div>
                      <div className = "co-f1 co-tx-r">{ item.eCity }</div>
                      <div style = { _styles.slideRit }></div>
                    </div>
                    <div className = "co-flex co-pd-tb04 co-jsb">
                      <div>南航</div>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </Scroll>
    )
  }
}

const _styles = {
  slideRit: {
    width: '5rem',
    textAlign: "right"
  }
}