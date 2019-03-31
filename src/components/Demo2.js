import React, { Component } from 'react';

export default class Demo2 extends React.Component {
    static defaultProps = {
        title: '公司地址'
    }
    constructor (props) {
        super(props);
        this.state = {
            address: '武汉花山软件新城'
        }
    }
    componentWillMount () {

    }
    render () {
        return (
            <div className="">
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.state.address}
                </div>
            </div>
        )
    }

}