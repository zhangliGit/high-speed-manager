import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { newsInfoList } from '../store/action/trip'
import Scroll from '../assets/component/Scroll'
import skb from '../assets/images/skb.png'
import cxdc from '../assets/images/cxdc.png'
import gtywb from '../assets/images/gtywb.png'
import czdp from '../assets/images/czdp.png'
class Trip extends React.Component {

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

  componentDidMount() {
    this.props.actions.newsInfoList();
  }
  render() {
    console.log(this.props)
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
          {
            this.props.list.map((item, index) => {
              return (
                <div key = { index } className = "co-flex co-pd-a06 co-bg-0 co-bd-b co-of">
                  <div>
                    <img src = { item.picUrl } style = {{width: "5rem", height: "4rem", background: "#444"}}  alt = "" />
                  </div>
                  <div className = "co-f1 co-mg-l06 co-flex co-ver co-jsb">
                    <div className = "co-te2" style = {{ color: "#333" }}>{ item.title }</div>
                    <div className = "co-flex co-te co-ac co-cl-2 co-fs-01">{ item.levelTitle }</div>
                    <div className = "co-flex co-jsb co-ac co-fs-01">
                      <div style = { _styles.tip }>{ item.type }</div>
                      <div className = "co-flex co-ac" style = {{ color: "#c3c3c3"}}>
                        <div  style = {{}}><i className = "icon iconfont icon-yanjing co-fs-1"></i></div>
                        <div style = {{ margin: "3px 3px 0"}}>{ item.watch }</div>
                      </div>
                    </div>
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
const mapStateToProps = (state) => {
  return {
    list: state.trip
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    actions: bindActionCreators({newsInfoList}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Trip)
