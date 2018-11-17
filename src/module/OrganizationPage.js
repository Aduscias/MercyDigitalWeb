import React, {Component} from 'react';
import Header from '../module/Header';
import {Row, Col, Button, Card} from 'antd';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import ApiLib from "./ApiLib";


class OrganizationArea extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            balance:0, transaction_history:{},
        };
        this.handleClickGetBalance = this.handleClickGetBalance.bind(this);
        this.handleClickRefreshReport = this.handleClickRefreshReport.bind(this);
    }

    getBalance() {
        let acc_name = localStorage.getItem('account_name');
        let result = ApiLib.getBalance(acc_name)
            .then(response => {
                this.setState ({balance:result})
                console.log(response)
            })
    }

    handleClickGetBalance() {
        let res = this.getBalance();
        console.log(res);
        /*
        console.log(this.state.org);
        this.setState({ org: testOrgNew });
        console.log(this.state.org);*/
    }


    /*sender, receiver, amount, currency, payload*/
    transfer(){
        let result = ApiLib.transfer("decent","myfirstacc","1","DCT","Hello")
            .then(response => {
                //this.setState ({balance:result})
                console.log(response)
            })
    }


    handleClickRefreshReport() {
        let result = ApiLib.transfer("decent","myfirstacc","1","DCT","Hello")
            .then(response => {
                //this.setState ({balance:result})
                console.log(response)
            })

        //let res = this.transer();
        //console.log(res);
        /*
        console.log(this.state.org);
        this.setState({ org: testOrgNew });
        console.log(this.state.org);*/
    }

/*
    componentDidMount() {
        let res = this.getBalance();
        console.log(res);
    }
*/
    render() {

        return (
            <div>
                <Header />
                <Row type="flex" justify="center" align="middle">
                    <Col span={8}>

                        <Button type="primary" onClick={this.handleClickTransactionHistory} style={{width: 200}}> История транзакций </Button>

                    </Col>
                    <Col span={8}>

                        <Button type="primary" onClick={this.handleClickGetBalance} style={{width: 200}}> Показать баланс </Button>

                    </Col>
                    <Col span={8}>

                        <Button type="primary" onClick={this.handleClickRefreshReport} style={{width: 200}}> Обновить отчет </Button>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default OrganizationArea;