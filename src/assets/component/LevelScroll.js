import React from 'react'
import BScroll from 'better-scroll'

export default class LevelScroll extends React.Component {

  componentDidMount() {
    this.scroll = new BScroll(this.refs.wrapperScroll, {
      click: true,
      scrollX: true
    });
  }
  render() {
    return (
      <div style = {{ width: "100%"}} ref="wrapperScroll">
        { this.props.children }
      </div>
    )
  }
}
