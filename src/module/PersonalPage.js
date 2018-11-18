import React, {Component} from 'react';
import Header from '../module/Header';
import {Row, Col, Button, Card, Input,Table, Divider, Tag } from 'antd';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import ApiLib from "./ApiLib";


class PersonalArea extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            balance: 0,
            transaction_history: data,

        };
        this.handleClickGetBalance = this.handleClickGetBalance.bind(this);
        this.handleClickUpdateTran = this.handleClickUpdateTran(this);
    }


    getBalance() {
        let acc_name = localStorage.getItem('account_name');
        ApiLib.getBalance('decent')
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

    handleClickUpdateTran(){
        this.setState({transaction_history: new_data})
    }
    componentDidMount() {
        this.getBalance();
        //console.log(res);
    }


    render() {
        const columns = [{
            title: 'Sender',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Receiver',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Amount',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Comment',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
            ),
        }];

        return (
            <div>
                <Header />
                <Row type="flex" justify="center" align="middle">
                    <Col span={8}>

                        <Button type="primary"  style={{width: 200}}> Update History </Button>

                    </Col>
                    <Col span={8}>

                        <Input placeholder="Basic usage" disabled={false} style={{width: '40%'}}
                               value={this.state.balance}/>
                        <Button type="primary" onClick={this.handleClickGetBalance}
                                style={{width: '30%'}}> Показать баланс </Button>


                    </Col>
                    <Col span={8}>

                        <Button type="primary"  style={{width: 200}} onClick={this.handleClickUpdateTran}> Статистика </Button>

                    </Col>
                </Row>
                <Row>
                    <Table columns={columns} dataSource={this.state.transaction_history} />

                </Row>
            </div>
        );
    }
}

export default PersonalArea;




const data = [{
    key: '1',
    name: 'testtestrt',
    age: 'testtestrtre',
    address: 5,
    tags: ['Cats'],
}, {
    key: '2',
    name: 'testtestrt',
    age: 'testtestrtre',
    address: 10,
    tags: ['Children'],
}, {
    key: '3',
    name: 'testtestrt',
    age: 'NewOrganization' ,
    address: 3,
    tags: ['Children'],
}];

const new_data = [{
    key: '1',
    name: 'testtestrt',
    age: 'testtestrtre',
    address: 5,
    tags: ['Cats'],
}, {
    key: '2',
    name: 'testtestrt',
    age: 'testtestrtre',
    address: 10,
    tags: ['Children'],
}, {
    key: '3',
    name: 'testtestrt',
    age: 'neworganization' ,
    address: 3,
    tags: ['Children'],
}, {
    key: '4',
    name: 'testtestrt',
    age: 'neworganization' ,
    address: 5,
    tags: ['Children'],
}];