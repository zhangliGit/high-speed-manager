import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default function wrapAnimation(WrappedComponent) {
    return class extends React.Component {
      render() {
        console.log(this.props)
        return (
          <CSSTransition
            in = { this.props.match !== null }
            classNames = "slide-in"
            timeout = { 300 }
          >
            <WrappedComponent {...this.props} />
          </CSSTransition>
        )
      }
    }
  }