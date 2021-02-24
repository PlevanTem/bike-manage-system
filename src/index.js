import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Life from './pages/demo/Life';
//import Child from './pages/demo/Child';
//import Admin from "./admin";
//import Home from "./pages/router_demo/router2/Home"
//import IRouter from './pages/router_demo/router3/router'
import ERouter from './router'
import reportWebVitals from './reportWebVitals'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ERouter />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();