import React from 'react'

import BScroll from 'better-scroll'

export default class Scroll extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs.scrollH.style.minHeight = `${(this.refs.wrapper.offsetHeight + 1)}px`;
      this.scroll.refresh();
    }, 100);
    if (!this.scroll) {
      this.scroll = new BScroll(this.refs.wrapper, {
        click: true,
        scrollbar: true
      });
      this.scroll.refresh();
    }
  }
  render() {
    return (
      <div className="co-f1 co-of" ref="wrapper">
        <div ref = "scrollH">
          { this.props.children }
        </div>
      </div>
    )
  }
}