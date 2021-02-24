import React from 'react';
import Child from './Child';
import './index.less';
import { Button, Input } from 'antd'; //必须使用解构的方法引用子集

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            count:0
        };
    }

    //ES6箭头函数
    handleAdd = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

    //老声明函数方法，一定要使用bind(this)
    handleClick () {
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){

        return <div className="content">
            <p>这里是父组件</p>
            <p>React生命周期介绍</p>
            <Input></Input>
            <Button onClick={this.handleAdd}>点击一下</Button>
            <Button onClick={this.handleAdd}>点击一下</Button>
            <Button onClick={this.handleClick.bind(this)}>点击一下</Button> 
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>

    }

}