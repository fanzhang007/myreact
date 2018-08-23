import React, { Component } from 'react';

export default class Child extends Component {
    render() {
        console.log('--',this.props)
        return (
            <div>222</div> 
        )
    }

}