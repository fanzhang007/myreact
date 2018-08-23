import React, { Component } from 'react';
import { Button } from 'antd'

export default class Child extends Component {
    render() {
        const { num = 0, arr = [] } = this.props;
        console.log('arr-',arr)
        return (
            <div>
                <Button onClick={this.btnClk.bind(this)}>按钮</Button>
                <div>{num}</div>
            </div>
        )
    }

    btnClk(){
        const { numAction, arrAction, objAction } = this.props.actions;
        numAction(24);
        arrAction([2,0,4]);
        objAction({'name':'zhangsan', age: 23})
    }
}