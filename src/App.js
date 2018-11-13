
//import logo from './logo.svg';
//import ReactDOM from "react-dom";
import './App.css';
import React, {Component} from 'react';
import { Switch, Route,Redirect } from 'react-router-dom'

import MainPage from './module/MainPage'
import PersonalPage from './module/PersonalPage'
import Authorize from './module/Authorize'
import LandingPage from './module/LandingPage'
import FooterH from './module/Footer'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class AppRoute extends Component {



    render(){
        return(
            <div className="App">
                <ReactCSSTransitionGroup transitionName="example"
                                         transitionAppear={true} transitionAppearTimeout={500}
                                         transitionEnter={false} transitionLeave={false}>
                    <Main />
                    <FooterH/>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

class Main extends Component {
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/Personal' component={PersonalPage}/>
                    <Route exact path='/Auth' component={Authorize}/>
                    <Route exact path='/Main' component={MainPage}/>
                    <Route component={LandingPage} />
                </Switch>
            </main>
        );
    }
}

export default AppRoute;


