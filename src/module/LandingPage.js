import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Anchor} from 'antd';
import {Row, Col, Button, Input, Icon} from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor'
const {Header, Content, Footer} = Layout;
const {Link} = Anchor;

//console.log(window.location.hash);
window.addEventListener("hashchange", function(e){
    //console.log('hashchange1', window.location.hash)
    if (window.location.hash!=='#section1') {
        document.getElementById("auth").style.display = "none";
    }
    else {
        document.getElementById("auth").style.display = "";
    }
});

class LandingPage extends Component {
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
        return (
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1"><a href='#section1'> Go to section 1 </a></Menu.Item>
                        <Menu.Item key="2"><a href='#section2'> Go to section 2 </a></Menu.Item>
                    </Menu>

                </Header>
                <Content style={{padding: '0 50px', marginTop: 64}}>
                    <div style={{background: '#fff', padding: 24}}>
                        <ScrollableAnchor id={'section1'}>
                            <div style={{background: '#fff', padding: 24,}}>
                                <Row>
                                    <Col span={12}>
                                        <h1>Впечатляющий текст</h1>
                                        <h2>Важная информация в друх строка <br/>о нас </h2>
                                        <img alt="Картинка с чем-то очень важным" src="./media/Landing_image_1.jpg" style={{width: 700}}/>
                                    </Col>
                                    <Col id = 'auth' span={12} style={{position: 'fixed', zIndex: 2, marginLeft: '43%' }}    >
                                        <p>Авторизуйтесь</p>
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
                            </div>
                        </ScrollableAnchor>
                        <ScrollableAnchor id={'section2'}>
                            <div style={{background: '#fff', padding: 24, minHeight: 380}}>

                                <h1>Тут начинается второй блок очень важного текста</h1>
                                <img alt="Картинка с чем-то очень важным" src="./media/nature-landscape.jpg" style={{width: 700}}/>
                            </div>
                        </ScrollableAnchor>
                    </div>
                </Content>

            </Layout>
        );

    }
}

export default LandingPage;