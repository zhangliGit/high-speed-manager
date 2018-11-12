import React from 'react'
import BScroll from 'better-scroll'

export default class Scroll extends React.Component {
  componentDidMount() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.refs.wrapper, {
        click: true,
        scrollbar: true
      });
      this.scroll.refresh()
    }
  }
  render() {
    return (
      <div className="co-f1 co-of" ref="wrapper">
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}