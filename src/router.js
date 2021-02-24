import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from "./App"
import Admin from './admin'
import Home from './pages/home'
import Login from './pages/login'
import NoMatch from './pages/nomatch'
import Buttons from './pages/ui/buttons'

export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        } />
                        <Route path="/order/detail" component={Login}/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}