import React, { Component } from 'react';
import PropTypes from 'prop-types'
import dataContext from '../context/index'

export default class Demo1 extends React.Component {
    static defaultProps = {
        title: '公司地址'
    }
    // static contextTypes = {
    //     name: PropTypes.string.isRequired,
    //     age: PropTypes.number.isRequired,
    //     cb: PropTypes.func.isRequired
    // }
    static propTypes = {
        name: PropTypes.string.isRequired
    }
    constructor (props, context) {
        super(props, context);
        console.log(this.context)
        this.state = {
            name: this.props.name,
            address: '武汉花山软件新城'
        }
    }

    setAdd () {
        console.log('setAdd')
    }
    setT () {
        this.context.cb()
    }
    componentWillMount () {
        console.log(2)
    }
    componentWillReceiveProps (nextProps) {
        console.log('props渲染', this.props, nextProps)
        if (this.props.name != nextProps.name) {
            this.setState({
               name:  nextProps.name
            })
        }
    }

    shouldComponentUpdate () {
        console.log('是否更新')
        return true
    }
    render () {
        console.log('update')
        return (
            <dataContext.Consumer>
            {({name, age}) => (
                <div className="">
                    <div>
                        {name}
                        {age}
                    </div>
                    <div>
                        {this.state.address}
                    </div>
                    <div onClick = {() => this.setT()} className="co-flex co-f1 co-pd-a06 co-bg-4 co-br-a co-cl-0 co-jc">
                        改变
                    </div>
                </div>
            )}
            </dataContext.Consumer>
        )
    }
    componentWillUpdate () {
        console.log('更新前')
    }
    componentDidUpdate () {
        console.log('更新完成')
    }
}