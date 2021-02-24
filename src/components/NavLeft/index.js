import React from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom' //用于跳转
import MenuConfig from './../../config/menuConfig'
//import { connect } from 'react-redux'
//import { switchMenu, saveBtnList } from './../../redux/action'
import './index.less'

const { SubMenu } = Menu;

export default class NavLeft extends React.Component{
    /*
    state = {
        currentKey: ''
    }
    handleClick = ({item, key}) => {
        if (key === this.state.currentKey) {
            return false;
        }
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title)) 
        // console.log(item)
        this.setState({
            currentKey: key
        })
    

    homeHandleClick = () => {
        const { dispatch } = this.props;
        dispatch(switchMenu('首页'));
        this.setState({
            currentKey: ""
        });
    };
    */
   
    componentWillMount() {
        const MenuTreeNode = this.renderMenu(MenuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
           currentKey,
           MenuTreeNode
        })
    }
    
    //菜单渲染
    renderMenu =(data)=> {
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render(){
        //图片不显示，解决方法：复制并放到public
        return(
            <div>
                <div className="logo">
                    <img src='assets/单车-1.svg' alt="logo" />
                    <h1>共享单车管理系统</h1>
                </div>
                <Menu theme="dark">
                    {this.state.MenuTreeNode}
                </Menu>
            </div>
        )
    }
}