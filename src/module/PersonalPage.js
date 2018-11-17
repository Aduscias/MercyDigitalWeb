import React, {Component} from 'react';
import Header from '../module/Header';
import {Row, Col, Button, Card} from 'antd';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';


class PersonalArea extends Component {
    render() {

        return (
            <div>
                <Header />
                <Row type="flex" justify="center" align="middle">
                    <Col span={8}>

                        <Button type="primary"  style={{width: 200}}> История транзакций </Button>

                    </Col>
                    <Col span={8}>

                        <Button type="primary"  style={{width: 200}}> Показать баланс </Button>

                    </Col>
                    <Col span={8}>

                        <Button type="primary"  style={{width: 200}}> Пожертвовать </Button>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default PersonalArea;