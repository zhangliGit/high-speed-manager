import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../assets/component/Header';
import { CSSTransition } from 'react-transition-group'
import { ticketDetail } from '../../store/action/ticket'
import { Popover, NavBar } from 'antd-mobile'

class TicketList extends React.Component {

  constructor() {
    super();
    this.state = {
      currentIndex: -1,
      dialogTag: false
    }
  }
  componentDidMount() {
    this.props.actions.ticketDetail();
  }
  onSelect(val) {
    this.setState({
      dialogTag: false
    })
  }
  render() {
    const { detail } = this.props;
    return (
      <div className ="co-flex co-ver co-Page">
        <Header title = "火车票详情" isBack
          ritBtn = {
            (
              <NavBar
                mode="light"
                rightContent={
                  <Popover mask
                    visible={ this.state.dialogTag }
                    overlay={[  
                      (<div onClick = { this.onSelect.bind(this, '32')} key="1" value="scan" className = "co-bd-b" style = {{ padding: ".5rem" }}>收藏车次</div>),
                      (<div onClick = { this.onSelect.bind(this, '32')} key="2" value="special" className = "co-bd-b" style = {{ padding: ".5rem" }}>解决车牌问题</div>),
                      (<div onClick = { this.onSelect.bind(this, '32')} key="3" value="special" className = "co-bd-b" style = {{ padding: ".5rem" }}>管家帮我买票</div>),
                      (<div onClick = { this.onSelect.bind(this, '32')} key="4" value="special" className = "co-bd-b" style = {{ padding: ".5rem" }}>分享车次信息</div>),
                    ]}
                  >
                    <div>
                      <i className = "coicon coicon-more co-cl-0 co-fs-2"></i>
                    </div>
                  </Popover>
                }
              >
              </NavBar>
            )
          }
        >
        </Header>
        <div>
        
        </div>
        <div className = "co-flex co-ac co-pd-a08 co-cl-0" style = {{ background: "rgb(72, 137, 219)"}}>
          <div className = "co-f1">
            <div className = "co-fs-2">{ detail.sCity }</div>
            <div className = "co-pd-tb08">{ (detail.sTime || '').substring(0, 5) }</div>
            <div>高铁 { detail.speed }km/h</div>
          </div>
          <div className = "co-f1 co-tx-c co-fs-01">
            <div>G410</div>
            <div className = "co-pd-t04">{ detail.number }站</div>
            <div className = "co-pd-t04">{ detail.needHour }小时{ detail.needMin}分</div>
            <div className = "co-pd-t04">准点率 { detail.percent}</div>
          </div>
          <div className = "co-f1 co-tx-r">
            <div className = "co-fs-2">{ detail.eCity }</div>
            <div className = "co-pd-tb08">{ (detail.eTime || '').substring(0, 5) }</div>
            <div>{ detail.type }</div>
          </div>
        </div>
        <div>
          {
            (detail.ticket || []).map((item, index) => {    
              return (
                <div key = { index }>
                  <div  className = "co-flex co-ac co-pd-a06 co-bg-0 co-bd-b">
                    <div style = {{ width: "6rem" }}>{ item.name }</div>
                    <div className = "co-f1">￥{ item.money }</div>
                    <div className = "co-f1">{ item.number }</div>
                    <div onClick = { () => { this.setState({ currentIndex: this.state.currentIndex === index ? -1 : index }) }} className = { ` ${index === this.state.currentIndex ? 'co-bg-1 co-cl-7' : 'co-bg-6'}  co-cl-0 co-fs-01 co-br-a0` }  style = {{ padding: ".3rem .6rem"}}>
                        预定
                    </div>
                  </div>
                  <CSSTransition
                      in = { this.state.currentIndex === index }
                      classNames = "slide-in"
                      timeout = { 0 }
                    >
                      <div className = "slide-in co-cl-2">
                        <div className = "co-flex co-pd-lr06 co-jsb co-ac co-bd-b" style = {{ height: "2.5rem"}}>
                          <div className = "co-fs-01">
                            <div className = "co-cl-7">12306预定</div>
                            <div className = "co-mg-t04">实时出票，在线退票，改签</div>
                          </div>
                          <div className = "co-bg-6 co-cl-0 co-fs-01 co-br-a0" style = {{ padding: ".3rem .6rem"}}>
                              预定
                          </div>
                        </div>
                        <div className = "co-flex co-pd-lr06 co-jsb co-ac co-bd-b" style = {{ height: "2.5rem"}}>
                          <div className = "co-fs-01">
                            <div className = "co-cl-7">管家代购</div>
                            <div className = "co-mg-t04">若多次服务异常或无账号，可尝试代购</div>
                          </div>
                          <div className = "co-bg-6 co-cl-0 co-fs-01 co-br-a0" style = {{ padding: ".3rem .6rem"}}>
                              预定
                          </div>
                        </div>
                      </div>
                    </CSSTransition>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    detail: state.ticket.detail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ticketDetail }, dispatch)
  }
}

TicketList = connect(mapStateToProps, mapDispatchToProps)(TicketList)

export default TicketList;