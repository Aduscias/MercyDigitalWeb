import React, {Component} from 'react';
import Header from '../module/Header';
import {Row, Col, Button, Input, Select} from 'antd';
import ApiLib from '../module/ApiLib';

const Option = Select.Option;

class OrganizationArea extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            balance: 0,
            transaction_history: {},
            GetFormPay: 'false',
            ParamRegister: {},
        };
        this.handleClickGetBalance = this.handleClickGetBalance.bind(this);
        this.handleClickRefreshReport = this.handleClickRefreshReport.bind(this);
        this.handleClickTransactionHistory = this.handleClickTransactionHistory(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickTransfer = this.handleClickTransfer.bind(this);
        this.SetParToRegister = this.SetParToRegister.bind(this);
    }
    SetParToRegister = (e) => {
        // console.log(e.target);
        // console.log(e.target.id);
        let ParamRegister = {...this.state.ParamRegister};
        ParamRegister[e.target.id] = e.target.value;
        this.setState({ParamRegister});
    };
    getBalance() {

        let acc_name =  window.location.hash;
        let re = '#';

        let newstr = acc_name.replace(re, '');
        ApiLib.getBalance(newstr)
            .then(response => {
                //this.setState ({balance:result})
                /* console.log(response);
                 console.log(response.result);
                 console.log(response.result.length);*/
                if (response) {
                    if (response.result){
                    if (response.result.length !== 0){
                    //console.log(response.result[0].amount);
                    this.setState({balance: response.result[0].amount})}}
                }
            })
    }


    transfer(){

        let sender = localStorage.getItem('account_name');
        let receiver= window.location.hash;
        let re = '#';

        let newstr = receiver.replace(re, '');
        console.log(this.state.ParamRegister['Comment']);
        console.log(this.state.ParamRegister['Amount']);
        ApiLib.transfer('decent',newstr,this.state.ParamRegister['Amount'],"DCT",this.state.ParamRegister['Comment'])
            .then(response => {
                //this.setState ({balance:result})
                console.log(response)
            })
    }

    getTransactionHistory() {
        let parametr = {
            'id': '1',
            'account': 'decent',
            'depth': '4'
        }

        let acc_name = localStorage.getItem('account_name');
        ApiLib.getHistory(parametr)
            .then(response => {
                console.log(response);
            })
    }


    handleClickGetBalance() {
        this.getBalance();
        //console.log(res);
        /*
        console.log(this.state.org);
        this.setState({ org: testOrgNew });
        console.log(this.state.org);*/
    }

    handleClickTransactionHistory() {
        //this.getTransactionHistory();
    }

    /*sender, receiver, amount, currency, payload*/




    handleClickRefreshReport() {
        /*  ApiLib.transfer("decent", "myfirstacc", "1", "DCT", "Hello")
              .then(response => {
                  //this.setState ({balance:result})
                  console.log(response)
              })
  */
        //let res = this.transer();
        //console.log(res);
        /*
        console.log(this.state.org);
        this.setState({ org: testOrgNew });
        console.log(this.state.org);*/
    }


    componentDidMount() {
        this.getBalance();
        //console.log(res);
    }

    handleChange(date, dateString, id) {
        //console.log(`selected ${value}`);
        console.log(date);
        console.log(dateString);
        console.log(id);
        // let _value = ${value};
        //this.setState({type: _value});
        //console.log(this.state.type);

        if (typeof date === "object") {
            date = dateString;
        }
        let ParamRegister = {...this.state.ParamRegister};
        ParamRegister[id] = date;
        this.setState({ParamRegister});
    }
    handleClickTransfer() {
        this.transfer();
    }


    render() {
        return (
            <div>
                <Header/>
                <Row type="flex" justify="center" align="middle">
                    <Col span={8}>

                        <Button type="primary" onClick={this.handleClickTransactionHistory}
                                style={{width: 200}}> Transaction History </Button>

                    </Col>
                    <Col span={8}>
                        <Input placeholder="Basic usage" disabled={false} style={{width: '40%'}}
                               value={this.state.balance}/>
                        <Button type="primary" onClick={this.handleClickGetBalance}
                                style={{width: '30%'}}> Refresh </Button>

                    </Col>
                    <Col span={8}>

                        <Button type="primary" onClick={this.handleClickRefreshReport} style={{width: 200}}> Обновить
                            отчет </Button>

                    </Col>
                </Row>
                <Row type="flex" style={{marginTop: 25}}>
                    <Col span={24}>
                        <Input placeholder="Amount transfer" style={{width: '20%'}}

                               onChange={this.SetParToRegister} id='Amount'

                        />
                        <Select defaultValue="Category transfer"
                                onChange={(date, dateString) => this.handleChange(date, dateString, 'Comment')}>
                            <Option value="Cats">Cats</Option>
                            <Option value="Children">Children</Option>
                        </Select>
                        <Button type="primary" onClick={this.handleClickTransfer}> Transfer </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OrganizationArea;