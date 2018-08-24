import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../store/index.js';
import { actions as publicActions } from '../../_public/store/index.js';
import './App.css';
import Child from '../components/Child.js';

@connect(
    state => {
        const { home = {}, publicdata } = state || {};
        return { ...home, ...publicdata }
    },
    dispatch => ({
        actions: bindActionCreators({ ...actions, ...publicActions }, dispatch)
    })
)

export default class HomeCont extends Component {

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