
//import logo from './logo.svg';
//import ReactDOM from "react-dom";
import '../App.css';
import React, {Component} from 'react';
import {Row, Col, Button, Card} from 'antd';
import Header from '../module/Header'
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class CardOrg extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            org: testOrg
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.state.org);
        this.setState({ org: testOrgNew });
        console.log(this.state.org);
    }

    render() {

        function toJsx(str) {
            return str;
        }


        function renderThreeOrg (orgsArr){

            if (orgsArr.length == 3) {
                return (
                    <Row type="flex">
                        <Col span={8} id={orgsArr[0].id}>
                            <Card title={orgsArr[0].title} extra={<a href="#">Подробнее</a>}>
                                <p>{orgsArr[0].description}</p>
                            </Card>
                        </Col>
                        <Col span={8} id={orgsArr[1].id}>
                            <Card title={orgsArr[1].title} extra={<a href="#">Подробнее</a>}>
                                <p>{orgsArr[1].description}</p>
                            </Card>
                        </Col>
                        <Col span={8} id={orgsArr[2].id}>
                            <Card title={orgsArr[2].title} extra={<a href="#">Подробнее</a>}>
                                <p>{orgsArr[2].description}</p>
                            </Card>
                        </Col>
                    </Row>);
            }
            if (orgsArr.length == 2) {
                return (
                    <Row type="flex" >
                        <Col span={8} id={orgsArr[0].id}>
                            <Card title={orgsArr[0].title} extra={<a href="#">Подробнее</a>}>
                                <p>{orgsArr[0].description}</p>
                            </Card>
                        </Col>
                        <Col span={8} id={orgsArr[1].id}>
                            <Card title={orgsArr[1].title} extra={<a href="#">Подробнее</a>}>
                                <p>{orgsArr[1].description}</p>
                            </Card>
                        </Col>
                    </Row>);
            }
            if (orgsArr.length == 1) {
                return (
                    <Row type="flex">
                        <Col span={8} id={orgsArr[0].id}>
                            <Card title={orgsArr[0].title} extra={<a href="#">Подробнее</a>}>
                                <p>{orgsArr[0].description}</p>
                            </Card>
                        </Col>
                    </Row>);
            }
        }


        const renderOrg = this.state.org.map(function (paramOrg) {
            return (
                <Col span={8} id={paramOrg.id}>
                    <Card title={paramOrg.title} extra={<a href="#">Подробнее</a>}>
                        <p>{paramOrg.description}</p>
                    </Card>
                </Col>
            )
        });


        let text = [];
        for (let i=0; i<this.state.org.length; i+=3){
            let cnt = [];

            for (let j = i; j < Math.min(this.state.org.length, i+3); j++) {
                cnt.push (this.state.org[j]);
            }

            console.log(cnt);
            text.push(renderThreeOrg(cnt));
        }



        return (
            <div>
                {text}
                <Button type="primary" onClick={this.handleClick}> Поменяй Json!</Button>
            </div>
        );
    }
}

class MainPage extends Component {
    render() {
        return (

            <div>
                <ReactCSSTransitionGroup transitionName="example"
                                         transitionAppear={true} transitionAppearTimeout={500}
                                         transitionEnter={false} transitionLeave={false}>
                    <Header />
                    <CardOrg />
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default MainPage;

let testOrg = [
    {
        id: 1,
        title: "Спасите кошечек",
        description: "Каждый кошке нужен дом, вы можете нам в этом помочь",
        logo: "logo1.png",
    },
    {
        id: 2,
        title: "Собаки - наше все",
        description: "Они врут, лучше всех в доме будет с собакой",
        logo: "logo2.png",
    },
    {
        id: 3,
        title: "Что может быть лучше детей?",
        description: "Дал Бог зайку, даст и лужайку. Сделайте что-то особенное",
        logo: "logo3.png",
    },
    {
        id: 4,
        title: "Реабилитация программистов",
        description: "Вы знаете как сложно блокчейн-программистам? Помогаем им социализироваться в реальном мире",
        logo: "logo4.png",
    }
];



let testOrgNew = [
    {
        id: 1,
        title: "Новый новый ",
        description: "Каждый кошке нужен дом, вы можете нам в этом помочь",
        logo: "logo1.png",
    },
    {
        id: 2,
        title: "НОвый новый 2",
        description: "<== Они врут, лучше всех в доме будет с собакой",
        logo: "logo2.png",
    },
    {
        id: 3,
        title: "Что может быть лучше детей?",
        description: "Дал Бог зайку, даст и лужайку. Сделайте что-то особенное",
        logo: "logo3.png",
    },
];

//console.log(testOrg);


//console.log(renderOrg);
//const template = Object.keys(data.books).map(item => <span key={data.books[item].id}>{data.books[item].author} - {data.books[item].name}</span>);


/*
// Parent Component
class GroceryList extends Component {
    render() {
        return (
            <ul>
                <ListItem quantity="1" name="Bread" />
                <ListItem quantity="6" name="Eggs" />
                <ListItem quantity="2" name="Milk" />
            </ul>
        );
    }
}
// Child Component
class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.quantity} × {this.props.name}
            </li>
        );
    }
}
*/