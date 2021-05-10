import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>i am profile {this.props.name}</h1>
            </div>
        )
    }
}

export default Profile
