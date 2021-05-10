import React, { Component } from 'react'
import Home from './Home'
import Profile from './Profile'

class ChildToParentDataTransfer extends Component {
    state = {
        name: "ramesh"
    }
    changename(name) {
        this.setState({
            name: name
        })
    }
    render() {
        return (
            <div>
                <h1>i am from parent app</h1>
                <Home handlenameChild={(name) => this.changename(name)} />
                <Profile name={this.state.name} />

            </div>
        )
    }
}

export default ChildToParentDataTransfer
