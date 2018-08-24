import React, { Component } from 'react';
import { injectReducer } from '../store';
import reducer from './store/index';
import HomeCont from './containers/HomeCont'

export default class Home extends Component {
    componentDidMount () {
        injectReducer('home', reducer)
    }

    render () {
        return(
            <HomeCont />
        )
    }
}