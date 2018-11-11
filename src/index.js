import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './App';
//import { Router, hashHistory as history } from 'react-router';
//import { BrowserRouter } from 'react-router-dom'
//import routes from './route';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';


ReactDOM.render((
    <BrowserRouter>
        <AppRoute />
    </BrowserRouter>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
