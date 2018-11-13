import React, {Component} from 'react';
import {Row, Col, Button, Input, Icon} from 'antd';
import Header from '../module/Header'

class Authorize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            authtrouble: 'false',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({userName: ''});
    }
    emitEmptyT = () => {
        this.userPasswordInput.focus();
        this.setState({password: ''});
    }
    onChangeUserName = (e) => {
        this.setState({userName: e.target.value});
    }
    onChangePassword = (e) => {
        this.setState({password: e.target.value});
    }

    handleClick() {
        console.log(this.state.userName);
        console.log(this.state.password);
        if (this.state.userName ==='11') {
           this.setState({authtrouble:true})
        }
    }

    render() {
        const {userName} = this.state;
        const {password} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        const suffixT = password ? <Icon type="close-circle" onClick={this.emitEmptyT}/> : null;
        let message = '';
        if (this.state.authtrouble === true) {
            message = (
                <Row type="flex" justify="center" align="middle">
                    <p style={{color: '#f5222d'}}>  Login failed
                    </p>
                </Row>);
        }
        return (
            <div>
                <Header />
                <Row type="flex" justify="center" align="middle">
                    <Col span={12} offset={0}>
                        <Input.Group>
                            <Input
                                placeholder="Enter your username"
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                suffix={suffix}
                                value={userName}
                                onChange={this.onChangeUserName}
                                ref={node => this.userNameInput = node}
                            />
                            <Input
                                placeholder="Enter your password"
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                suffix={suffixT}
                                value={password}
                                onChange={this.onChangePassword}
                                type="password"
                                ref={node => this.userPasswordInput = node}
                            />
                        </Input.Group>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle">
                    <Col span={12} offset={0}>
                        <Button type="primary" block onClick={this.handleClick}>Login</Button>
                    </Col>

                </Row>
                {message}
            </div>
        );
    }
}


export default Authorize;