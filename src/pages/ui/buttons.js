import React from 'react'
import {Card, Button, Radio} from 'antd'
import './ui.less'

export default class Buttons extends React.Component{
    
    state = {
        loading: true,
        size: 'default'
    }

    //不用箭头函数就得bind
    handleCloseLoading=()=>{
        this.setState({
            loading:false
        });
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render(){
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">ABC</Button>
                    <Button>ABC</Button>
                    <Button type="dashed">ABC</Button>
                    <Button type="danger">ABC</Button>
                    <Button disabled>ABC</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading} >点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.group>
                </Card>
                <Card title="">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading} >点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
            </div>
        );
    }
}