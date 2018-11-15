import React, {Component} from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

class FooterH extends Component {
    render () {
        return (
            <Footer style={{textAlign: 'center'}}>
                GreenTears Design ©2018 Created by GreenTears Team
            </Footer>
        );
    }
}

export default FooterH;