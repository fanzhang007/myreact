import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import _ from 'lodash';
import $ from 'jquery';
import axios from 'axios'

const headers = {
	'Content-Type': 'application/json'
};

class App extends Component {

    btnClick = async(value) => {
        let url = 'http://bimcd.ecidi.com:6544/accounts/api/users/526/'
        const params = {
            headers: headers,
            method: 'GET'
        };
        // let rst = fetch(url).then(async res => {
        //     console.log('res-',res)
        //     let aa = await res.json();
        //     console.log('aa-',aa)
        //     return aa
        // })
        fetch(url).then(res => {
            console.log('res22-',res)
            let sss = res.json()
            console.log('sss22-',sss);
            return sss
        }).then(rst => {
            console.log('rst2-',rst)
        })
        let rst = await fetch(url).then(res => {
            console.log('res-',res)
            let sss = res.json()
            console.log('sss-',sss);
            return sss
        })
        console.log('rst-',rst)
    };

    ajaxbtnClick = () => {
        let url = 'https://api.douban.com/v2/movie/subject/1764796'
        $.ajax({
            url: url,
            type:'GET',
            dataType:'jsonp',
            // success: function(res){
            //     console.log('res',res)
            // }
        }).then(res => {
            console.log('res-',res)
        })
    }
    axiosbtnClick = () => {
        axios({
            method:'get',
            url:'https://api.douban.com/v2/movie/subject/1764796'
        }).then(res => {
            console.log('res-',res);
        })
    }

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
            return item.pets[0].name;
        });
        console.log('aa--', aa);
        let bb = _.map(ownerArr, 'pets[0].name');
        console.log('bb--', bb);

        let objA = { name: 'zhangsan', car: 'BMW X6', age: 28 };
        let objB = _.pick(objA, ['name', 'age']);
        objA = _.omit(objA, ['name', 'age']);
        console.log('objA--', objA);
        console.log('objB--', objB);
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
                        style={{marginRight:10}}
                        type="primary"
                        onClick={() => this.btnClick('antdBtn')}
                    >
                        fetchButton
                    </Button>
                    <Button
                        style={{marginRight:10}}
                        type="primary"
                        onClick={() => this.ajaxbtnClick('antdBtn')}
                    >
                        ajaxButton
                    </Button>
                    <Button
                        style={{marginRight:10}}
                        type="primary"
                        onClick={() => this.axiosbtnClick('antdBtn')}
                    >
                        axiosButton
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
