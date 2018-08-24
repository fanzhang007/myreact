import React, { Component } from 'react';
import { Button } from 'antd'

export default class Child extends Component {
    render() {
        const { num = 0, arr = [], publicmsg = {} } = this.props;
        console.log('arr-', arr, 'publicmsg-', publicmsg)
        return (
            <div>
                <Button onClick={this.btnClk.bind(this)}>按钮</Button>
                <div>{num}</div>
            </div>
        )
    }

    btnClk(){
        const { numAction, arrAction, objAction, publicAction } = this.props.actions;
        numAction(24);
        arrAction([2,0,4]);
        objAction({'name': 'zhangsan', age: 23});
        publicAction({'time': '2018年','address': '杭州'})
    }
}