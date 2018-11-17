import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Anchor, Dropdown, Select, Row, Col, Button, Input, Icon, DatePicker} from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import ApiLib from '../module/ApiLib';


const {Header, Content, Footer} = Layout;
const Option = Select.Option;
const InputGroup = Input.Group;

//const {Link} = Anchor;


//console.log(window.location.hash);
window.addEventListener("hashchange", function (e) {
    //alert(window.location.hash);
    if (window.location.hash === '#section1' || window.location.hash === '') {
        document.getElementById("auth").style.display = "";
    }
    else {
        document.getElementById("auth").style.display = "none";
    }
});

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            authtrouble: 'false',
            IsFadeRegister: 'true',
            ParamRegister: {'type': ''},
            redirect: 'true',
        };
        this.handleClick = this.handleClick.bind(this);
        this.RegisterFadeIn = this.RegisterFadeIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.RegisterGo = this.RegisterGo.bind(this);
        this.SetParToRegister = this.SetParToRegister.bind(this);
        this.CheckAuth = this.CheckAuth.bind(this);
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({userName: ''});
    };
    emitEmptyT = () => {
        this.userPasswordInput.focus();
        this.setState({password: ''});
    };
    onChangeUserName = (e) => {
        this.setState({userName: e.target.value});
    };
    onChangePassword = (e) => {
        this.setState({password: e.target.value});
    };

    handleClick() {
        console.log(this.state.userName);
        console.log(this.state.password);
        if (this.state.userName === '11') {
            this.setState({authtrouble: true})
        }
    }

    handleChange(date, dateString, id) {
        //console.log(`selected ${value}`);
        console.log(date);
        console.log(dateString);
        console.log(id);
        // let _value = `${value}`;
        //this.setState({type: _value});
        //console.log(this.state.type);

        if (typeof date === "object") {
            date = dateString;
        }
        let ParamRegister = {...this.state.ParamRegister};
        ParamRegister[id] = date;
        this.setState({ParamRegister});
    }

    RegisterFadeIn() {
        this.setState({IsFadeRegister: false})
    }

    CheckAuth() {
        let account = this.state.userName;
        let password = this.state.password;
        let result = ApiLib.authorize(account, password)
            .then(response => {
                let answer = response.type;
                if (answer === null) {
                    this.setState({authtrouble: true})
                } else {
                    //this.setState({redirect: true})
                   // console.log(response.type)
                      //  `this.props.history.push('/main')`
                }
            })
    }

    // console.log(result);


//SetInfoToRegister
    SetParToRegister = (e) => {
        // console.log(e.target);
        // console.log(e.target.id);
        let ParamRegister = {...this.state.ParamRegister};
        ParamRegister[e.target.id] = e.target.value;
        this.setState({ParamRegister});
    };

    RegisterGo() {
        let ParamRegister = {...this.state.ParamRegister};
        console.log(ParamRegister);
        if (ParamRegister['type'] === 'org') {
            let result = ApiLib.createAccountOrganisation(ParamRegister)
                .then(response => console.log(response));
        }
        if (ParamRegister['type'] === 'person') {
            let result = ApiLib.createAccountDonor(ParamRegister)
                .then(response => console.log(response));

        }
    }

    render() {
        console.log(this.state.redirect)
        if (this.state.redirect) {
           // return <Redirect push to="/main" />;
        }

        const {userName} = this.state;
        const {password} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        const suffixT = password ? <Icon type="close-circle" onClick={this.emitEmptyT}/> : null;
        let RegisterButton = '';
        let InputForm = '';

        const selectAfter = (
            <Select defaultValue="Choose type Account" style={{width: 80}}
                    onChange={(date, dateString) => this.handleChange(date, dateString, 'type')}>
                <Option value="org">Organization</Option>
                <Option value="person">Donor</Option>
            </Select>
        );

        if (this.state.ParamRegister['type'] === 'org') {
            InputForm =
                <div>
                    <Input style={{width: '50%'}} defaultValue="" placeholder="Account Name"
                           onChange={this.SetParToRegister}
                           id='account_name'
                    />
                    <Input style={{width: '50%'}}
                           prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                           defaultValue=""
                           type="password"
                           placeholder="Enter your password"
                           onChange={this.SetParToRegister} id='password'
                    />
                    <Input style={{width: '50%'}} defaultValue="" placeholder="Organization name"
                           onChange={this.SetParToRegister} id='organization_name'
                    />
                    <Input style={{width: '50%'}} defaultValue="" placeholder="Legal address"
                           onChange={this.SetParToRegister} id='legal_address'
                    />
                    <Input style={{width: '50%'}} defaultValue="" placeholder="OGRN"
                           onChange={this.SetParToRegister} id='ogrn'
                    />
                    <Input style={{width: '50%'}} defaultValue="" placeholder="INN"
                           onChange={this.SetParToRegister} id='inn'
                    />
                    <Input style={{width: '50%'}} defaultValue="" placeholder="Founders"
                           onChange={this.SetParToRegister} id='founders'
                    />
                    <DatePicker
                        onChange={(date, dateString) => this.handleChange(date, dateString, 'registration_date')}/>
                    <Button type="primary" style={{width: 125}} onClick={this.RegisterGo}> Go! </Button>
                </div>
        }

        if (this.state.ParamRegister['type'] === 'person') {
            InputForm =
                <div>
                    <Input style={{width: '50%'}} defaultValue="" placeholder="Account Name"
                           onChange={this.SetParToRegister}
                           id='account_name'
                    />
                    <Input style={{width: '50%'}}
                           prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                           defaultValue=""
                           type="password"
                           placeholder="Enter your password"
                           onChange={this.SetParToRegister} id='password'
                    />
                    <Input style={{width: '50%'}} defaultValue="" placeholder="First Name"
                           onChange={this.SetParToRegister} id='first_name'
                    />
                    <Input style={{width: '50%'}} defaultValue="" placeholder="Last Name"
                           onChange={this.SetParToRegister} id='last_name'
                    />
                    <DatePicker onChange={(date, dateString) => this.handleChange(date, dateString, 'birth_date')}/>

                    <Select defaultValue="Сhoose you Town" style={{width: '50%'}}
                            onChange={(date, dateString) => this.handleChange(date, dateString, 'region')}>
                        <Option value="Town1">Town1</Option>
                        <Option value="Town2">Town2</Option>
                    </Select>
                    <Select defaultValue="Сhoose you Job" style={{width: '50%'}}
                            onChange={(date, dateString) => this.handleChange(date, dateString, 'job')}>
                        <Option value="Job1">Job1</Option>
                        <Option value="Job2">Job2</Option>
                    </Select>
                    <Button type="primary" style={{width: 125}} onClick={this.RegisterGo}> Go! </Button>
                </div>
        }

        if (this.state.IsFadeRegister) {
            RegisterButton = '';
        } else {
            RegisterButton = <div>
                <div>
                    {selectAfter}
                </div>
                <div>
                    {InputForm}
                </div>
            </div>;
        }

        return (
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>

                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{lineHeight: '64px', width: '100%'}}
                    >
                        <Menu.Item key="1"><a href='#section1'> About us </a></Menu.Item>
                        <Menu.Item key="2"><a href='#section2'> Our mission </a></Menu.Item>
                        <Menu.Item key="3"><a href='#section3'> How it works </a></Menu.Item>
                        <Menu.Item key="4"><a href='#section4'> Statistics </a></Menu.Item>
                    </Menu>

                </Header>
                <Content style={{padding: '0 50px', marginTop: 64}}>
                    <div style={{background: '#fff', padding: 24}}>
                        <ScrollableAnchor id={'section1'}>
                            <div style={{background: '#fff', padding: 24,}}>
                                <Row>
                                    <Col span={12}>
                                        <h1>MercyDigital by GreenTears</h1>
                                        <h2>MercyDigital is the charity platform for most transparency and traceability
                                            of donated funds. </h2>
                                        <img alt="Картинка с чем-то очень важным" src="./media/Landing_image_1.jpg"
                                             style={{width: 900}}/>
                                    </Col>
                                    <Col id='auth' span={8}
                                         style={{position: 'fixed', zIndex: 2, marginLeft: '66%', width: 250}}>

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
                                            {RegisterButton}
                                        </Input.Group>
                                        <Button type="primary" style={{width: 125}} onClick={this.CheckAuth}> Log
                                            In </Button>
                                        <Button type="primary" style={{width: 125}}
                                                onClick={this.RegisterFadeIn}> Register </Button>
                                    </Col>
                                </Row>
                            </div>
                        </ScrollableAnchor>

                        <ScrollableAnchor id={'section2'}>
                            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                                <Row>
                                    <Col span={8} style={{marginTop: '10%'}}>
                                        <h1>Confidence is one of the most significant side of charity funds
                                            activities.</h1>
                                        <h2>Our mission is to provide funds and their donors a way to get this actions
                                            easier.</h2>
                                    </Col>
                                    <Col>
                                        <img alt="Картинка с чем-то очень важным" src="./media/Landing_image_1.jpg"
                                             style={{width: 700}}/>
                                    </Col>
                                </Row>
                            </div>
                        </ScrollableAnchor>

                        <ScrollableAnchor id={'section3'}>
                            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                                <Row>
                                    <Col span={13}>
                                        <img alt="Картинка с чем-то очень важным" src="./media/Landing_image_1.jpg"
                                             style={{width: 700}}/>
                                    </Col>
                                    <Col span={8} style={{marginTop: '10%', marginLeft: '10%'}}>
                                        <h1>How it works.</h1>
                                        <h2>You can donate with our cryptocurrency. It will be transfer to the chosen
                                            fund. All transactions are available in blockchain.
                                            Fund will get it and show for what needs your money will be used.</h2>
                                    </Col>
                                </Row>
                            </div>
                        </ScrollableAnchor>

                        <ScrollableAnchor id={'section4'}>
                            <div style={{background: '#fff', padding: 24, minHeight: 380}}>

                                <h1>Statistics in numbers</h1>
                                <img alt="Картинка с чем-то очень важным" src="./media/Landing_image_1.jpg"
                                     style={{width: 950}}/>
                            </div>
                        </ScrollableAnchor>
                    </div>
                </Content>

            </Layout>
        );

    }
}

export default LandingPage;
