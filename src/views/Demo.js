import React, { Component } from 'react';
import Demo1 from '../components/Demo1'
import Header from '../components/Header'
import PropTypes from 'prop-types'
import dataContext from '../context/index'


export default class Demo extends React.Component {
    static defaultProps = {
        title: '用户信息'
    }
    // static childContextTypes = {
    //     name: PropTypes.string.isRequired,
    //     age: PropTypes.string.isRequired,
    //     cb: PropTypes.func.isRequired
    // }
    // getChildContext () {
    //     return {
    //         name: 'zhangli',
    //         age: '30',
    //         cb: () => {
    //             console.log(333)
    //         }
    //     }
    // }
    constructor (props) {
        super(props);
        console.log('初始化构造器', this.props)
        this.demo = React.createRef()
        this.state = {
            headInfo: '示例',
            name: 'zhangli',
            sex: '男',
            age: 21
        }
    }

    componentWillMount () {
        console.log('准备渲染')
    }

    change () {
        this.setState({
            name: 'chentian'
        }, () => {
            console.log('state完毕')
        })
    }

    setChild () {
        this.demo.current.setAdd()
        console.log(this.demo.current.state.address)
    }

    render () {
        console.log('开始渲染')
        const { headInfo, name, sex, age} = this.state
        return (
            <dataContext.Provider value = {{name: 'zhangli12121', age: '21'}}>
                <div className ="co-flex co-ver co-Page">
                    <Header title = {headInfo} isBack></Header>
                    <div className = "co-f1">
                        <div>{this.props.title}</div>
                        <div className="co-flex co-pd-a08 co-ac co-bd-b co-jsb">
                            <div>{name}</div>
                            <div>{sex}</div>
                            <div>{age}</div>
                        </div>
                        <div className="co-flex">
                            <div onClick = {() => this.change()} className="co-flex co-f1 co-pd-a06 co-bg-3 co-br-a co-cl-0 co-jc">
                                chang
                            </div>
                            <div onClick = {() => this.setChild()} className="co-flex co-f1 co-pd-a06 co-bg-4 co-br-a co-cl-0 co-jc">
                                调用子组件
                            </div>
                        </div>
                        <div className = "co-flex">
                            <div className="co-f1 co-pd-a08">
                            
                                <Demo1 ref= {this.demo }></Demo1>
                            </div>
                            <div className="co-f1"></div>
                        </div>
                    </div>
                </div>
            </dataContext.Provider>
        )
    }
    componentDidMount () {
        console.log('渲染完毕')
    }
    shouldComponentUpdate () {
        console.log('是否需要更新')
        return true
    }
    componentWillUpdate () {
        console.log('准备开始更新')
    }
    componentDidUpdate () {
        console.log('更新完毕')
    }
    componentWillUnmount () {
        console.log('组件将要被卸载')
    }
}