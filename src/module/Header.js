import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            redirect: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.setState({redirect: true});

    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/Personal"/>;
            // return <Link to='/Personal'></Link>
        }
        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col span={8}> <img alt="Title" src="./media/green-tear-md.png" style={{width: 100}}/> </Col>
                    <Col span={8}>How about sharing with those in need? Now in BlockChain</Col>
                    <Col span={8}>
                        <Link to='/Personal'>
                            <Button type="primary"> Join!</Button>
                        </Link>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Header;