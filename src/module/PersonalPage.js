import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Header from '../module/Header'


class PersonalArea extends Component {
    render() {
        return (
            <div>
                <Header />
                <Row type="flex" justify="center" align="middle">
                    <Col span={8}>Параметры клиента</Col>
                    <Col span={8}>История транзакций</Col>
                    <Col span={8}>Какая-то визуализация</Col>
                </Row>
            </div>
        );
    }
}

export default PersonalArea;