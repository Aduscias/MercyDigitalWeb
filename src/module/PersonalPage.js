import React, {Component} from 'react';
import Header from '../module/Header';
import {Row, Col, Button, Card, Input} from 'antd';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import ApiLib from "./ApiLib";


class PersonalArea extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            balance: 0,
            transaction_history: {},
        };
        this.handleClickGetBalance = this.handleClickGetBalance.bind(this);
        //this.handleClickTransactionHistory = this.handleClickTransactionHistory(this);
    }


    getBalance() {
        let acc_name = localStorage.getItem('account_name');
        ApiLib.getBalance(acc_name)
            .then(response => {
                //this.setState ({balance:result})
                /* console.log(response);
                 console.log(response.result);
                 console.log(response.result.length);*/
                if (response && response.result.length !== 0) {
                    //console.log(response.result[0].amount);
                    this.setState({balance: response.result[0].amount})
                }
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


    componentDidMount() {
        this.getBalance();
        //console.log(res);
    }

    render() {

        return (
            <div>
                <Header />
                <Row type="flex" justify="center" align="middle">
                    <Col span={8}>

                        <Button type="primary"  style={{width: 200}}> История транзакций </Button>

                    </Col>
                    <Col span={8}>

                        <Input placeholder="Basic usage" disabled={false} style={{width: '40%'}}
                               value={this.state.balance}/>
                        <Button type="primary" onClick={this.handleClickGetBalance}
                                style={{width: '30%'}}> Показать баланс </Button>


                    </Col>
                    <Col span={8}>

                        <Button type="primary"  style={{width: 200}}> Статистика </Button>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default PersonalArea;