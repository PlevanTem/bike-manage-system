import React from 'react'
 
export default class Child extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
 
    //打印生命周期
    componentWillMount(){
        console.log('will mount')
    }
 
    componentDidMount(){
        console.log('Did mount')
    }
 
    componentWillReceiveProps(newProps){
        console.log('will props'+ newProps.name)
    }
 
    shouldComponentUpdate(){
        console.log('should update')
        return true;
        //一旦 return false 后面的生命周期方法就不会走了
    }
 
    componentWillUpdate(){
        console.log('will update')
    }
 
    componentDidUpdate(){
        console.log('did update')
    }
    render(){
        //render方法必须return
        return <div>
            <p>这里是子组件，测试子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
 
}