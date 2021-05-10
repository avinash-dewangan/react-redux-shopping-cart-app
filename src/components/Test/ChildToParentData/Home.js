import React, { Component } from 'react'
class Home extends Component {
    state = {
        homename: "suresh"
    }
    render() {
        return (
            <div>
                <h1>i am home page</h1>

                <button onClick={() => this.props.handlenameChild(this.state.homename)}>Change name</button>
            </div>
        )
    }
}

export default Home
