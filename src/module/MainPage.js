//import logo from './logo.svg';
//import ReactDOM from "react-dom";
import '../App.css';
import React, {Component} from 'react';
import {Row, Col, Button, Card} from 'antd';
import Header from '../module/Header';
import ApiLib from '../module/ApiLib';

let ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class CardOrg extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            org: [],
        };
        this.handleClick = this.handleClick.bind(this);
        this.getOrgsList = this.getOrgsList.bind(this);
    }

    getOrgsList() {

        const tr = 'hey';
        let result = ApiLib.getOrgsList(tr)
            .then(response => {
                //this.setState ({org:response})
                console.log(response.org_names)
                let new_org = {};
                let new_org_arry=[]
                for (let i=0;i<response.org_names.length;i++){
                     new_org = {
                        'id' : i,
                        'title' : response.org_names[i],
                        'description' : 'Тестовая организация'
                    }
                    new_org_arry.push(new_org);

                }
                //console.log(new_org);
                //console.log(new_org_arry);
                this.setState ({org:new_org_arry})
                //let new_org= Object.assign({}, response.org_names);
            })
    }
/*
        id: 1,
        title: "Спасите кошечек",
        description: "Каждый кошке нужен дом, вы можете нам в этом помочь",
 */



    handleClick() {
        this.getOrgsList();
        //console.log(res);
        /*
        console.log(this.state.org);
        this.setState({ org: testOrgNew });
        console.log(this.state.org);*/
    }


     componentDidMount() {
         this.getOrgsList();
      //   console.log('res:'+res);
     }


    render() {

        function toJsx(str) {
            return str;
        }

        function refText(orgsArr, n) {
            let str = '/Organization#'+orgsArr[n].title;
            return (<a href={str} > Подробнее</a>);
        }

        function columnTagText (orgsArr, n) {
            let text = refText(orgsArr, n);
            return (
                <Col span={8} id={orgsArr[n].id}>
                    <Card title={orgsArr[n].title} extra={text}>
                        <p>{orgsArr[n].description}</p>
                    </Card>
                </Col>
            );
        }

        function renderThreeOrg(orgsArr) {

            if (orgsArr.length === 3) {
                return (
                    <Row type="flex">
                        {columnTagText(orgsArr,0)}
                        {columnTagText(orgsArr,1)}
                        {columnTagText(orgsArr,2)}
                    </Row>);
            }
            if (orgsArr.length == 2) {
                return (
                    <Row type="flex">
                        {columnTagText(orgsArr,0)}
                        {columnTagText(orgsArr,1)}
                    </Row>);
            }
            if (orgsArr.length == 1) {
                return (
                    <Row type="flex">
                        {columnTagText(orgsArr,0)}
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
        for (let i = 0; i < this.state.org.length; i += 3) {
            let cnt = [];

            for (let j = i; j < Math.min(this.state.org.length, i + 3); j++) {
                cnt.push(this.state.org[j]);
            }

            console.log(cnt);
            text.push(renderThreeOrg(cnt));
        }


        return (
            <div>
                {text}
                <Button type="primary" onClick={this.handleClick}> Обновить список организаций</Button>
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
                    <Header/>
                    <CardOrg/>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default MainPage;