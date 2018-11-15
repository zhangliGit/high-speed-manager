import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  backHtml() {
    this.context.router.history.goBack();
  }
  render() {
    return (
      <div id="co-header" className="co-header co-flex co-ac" style = { _styles.headBg }>
        <div className="co-flex co-ac"  style = { _styles.headSlide }>
          <div onClick = { this.backHtml.bind(this)} >
            {
              this.props.isBack ? 
              <i className = "coicon coicon-return co-fs-3 co-cl-0"></i>
              :
              ""
            }
          </div>
        </div>
        <div className="co-cl-0  co-header-title co-tx-c">
          { this.props.title }
        </div>
        <div className="co-flex co-je" style = { _styles.headSlide }>
        { this.props.children }
        </div>
      </div>
    )
  }
}

const _styles = {
  headBg: {
    background: "#4889db"
  },
  headSlide: {
    width: "3rem"
  },
}