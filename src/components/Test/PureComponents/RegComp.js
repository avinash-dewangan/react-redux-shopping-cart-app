import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log("Regular Components");
        return (
            <div>
                <h1>Regular Component</h1>
                {this.props.name}
            </div>
        )
    }
}

export default RegComp
