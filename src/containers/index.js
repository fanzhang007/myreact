import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../store/index.js'
import './App.css';
import Child from '../components/Child.js';

@connect(
    state => {
        console.log('state: ',state)
        const { appstore = {} } = state || {};
        return appstore
    },
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)

export default class App extends Component {

    render() {
        const { obj = {} } = this.props;
        console.log('obj-',obj)
        return (
            <Child {...this.props}/>
        )
    }
}

// export default connect(
//     state => {
//         const { appstore = {} } = state || {};
//         return appstore
//     },
//     dispatch => ({
//         actions: bindActionCreators(actions, dispatch)
//     })
// )(App)