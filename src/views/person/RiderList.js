import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../assets/component/Header';
import Scroll from '../../assets/component/Scroll';
import { getRiderList } from '../../store/action/person'
class RiderList extends React.Component {
 
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  componentDidMount() {
    this.props.actions.getRiderList();
  }
  goAdd() {
    this.context.router.history.push('/AddRider');
  }
  render() {
    const { riderList } = this.props;
    return (
      <div className ="co-flex co-ver co-Page">
        <Header title = "火车票" isBack></Header>
        <Scroll>
          <div style = {{height: "2rem", background: "#4889db"}}>
          </div>
          <div className="co-mg-lr05 co-bg-0 co-br-a0" style = {{ marginTop: "-1.6rem" }}>
            <div onClick = { this.goAdd.bind(this) } className="co-flex co-ac co-jc co-pd-a08 co-bd-b" style = {{ color: "#4889db" }}>
              <i className="icon iconfont icon-tianjia co-fs-3 co-mg-r04"></i> 新增乘车人
            </div>
            {
              riderList.map((item, index) => {
                return  (
                  <div key = { index } className="co-flex co-ac co-bd-b co-pd-a06">
                    <div className="co-f1">
                      <div>{ item.name }</div>
                      <div className="co-cl-2 co-fs-01 co-mg-t04">{ item.cardType } { item.cardNo }</div>
                    </div>
                    <div>
                      { item.status ? '通过' : '未通过' }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </Scroll>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    riderList: state.person.riderList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getRiderList }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RiderList)