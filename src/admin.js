import React from 'react'
import {Row,Col} from 'antd' //通过{}ES6解构
import Header from './components/Header' // 相当于import Header from './components/Header/index.js'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'
//import Home from './pages/home'

//Admin是一个对象，etends React.component继承生命周期
export default class Admin extends React.Component{

    render(){
        //return只能return一个根节点，不能多个<div>
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="20" className="main">
                    <Header />
                    <Row className="content">
                        {/*<Home/>*/}
                        {this.props.children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }

}