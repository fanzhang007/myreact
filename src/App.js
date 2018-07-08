import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import _ from 'lodash';

class App extends Component {
    btnClick = value => {
        alert(`欢迎使用${value}哦！`);
    };

    lodashClick = () => {
        let ownerArr = [
            {
                owner: 'Colin',
                pets: [{ name: 'dog1' }, { name: 'dog2' }]
            },
            {
                owner: 'John',
                pets: [{ name: 'dog3' }, { name: 'dog4' }]
            }
        ];
        let aa = ownerArr.map(item => {
            return item.pets[0].name
        })
        console.log('aa--',aa);

        let bb = _.map(ownerArr,'pets[0].name');
        console.log('bb--',bb)
        console.log('------------');
        let objA = {"name": "zhangsan", "car": "BMW X6", "age": 28};
        let objB = _.pick(objA,['name','age']);
        objA = _.omit(objA,['name','age']);
        console.log('objA--',objA);
        console.log('objB--',objB)
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <div>
                    <h2>开始我的表演了！！</h2>
                    <Button
                        type="primary"
                        onClick={() => this.btnClick('antdBtn')}
                    >
                        antdbutton
                    </Button>
                    <Button type="danger" onClick={() => this.lodashClick()}>
                        lodash测试
                    </Button>
                </div>
            </div>
        );
    }
}

export default App;
