import React from 'react'

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      menuList: [
        {
          id: 0,
          icon: "icon-huoche",
          title: '车票预定'
        },
        {
          id: 1,
          icon: "icon-lishihangcheng",
          title: '我的行程'
        },
        {
          id: 2,
          icon: "icon-lvxingxiang",
          title: '旅行服务'
        },
        {
          id: 3,
          icon: "icon-geren",
          title: '个人中心'
        }
      ]
    }
  }
  menuChange(index) {
    this.setState({
      currentIndex: index
    })
    this.props.changePage(index);
  }
  render() {
    return (
      <div id="co-footer" className="co-flex co-ac co-bd-t" style = { _styles.autoMenu }>
        {
          this.state.menuList.map((item, index) => {
            return (
              <div onClick = {this.menuChange.bind(this, index)} key = {item.id} className = "co-f1 co-flex co-ver co-ac co-jc" style = { index === this.state.currentIndex ? _styles.activeMenu: {} }>
                <div>
                  <i className = {`icon iconfont ${item.icon} co-fs-3`}></i>
                </div>
                <div className = { "co-fs-01 co-mg-t02" }>{ item.title }</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const _styles = {
  autoMenu: {
    color: "#838383"
  },
  activeMenu: {
    color: "#4889db"
  }
}