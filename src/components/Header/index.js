import { Col, Row } from 'antd'
import React from 'react'
import './index.less'
import Util from "../../utils/utils"
import axios from '../../axios/index'

export default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userName:'Admin'
        })
        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);
    }

    //获取天气的方法
    getWeatherAPIDate(){
        let city = '杭州';
        axios.jsonp({
          url: 'http://api.map.baidu.com/weather/v1/?district_id=330104&data_type=all&ak=NmIp0sLGlLuwGn5b1l2XufoLnvRLmrXV'
        }).then((res)=>{
          if(res.status === 'success'){
            let data = res.result[0].forecasts[0];
            this.setState({
              //dayPictureUrl:data.dayPictureUrl,
              weather: data.text_day
            })
          }
        })
      }

    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName} </span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}