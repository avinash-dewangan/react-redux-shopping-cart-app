import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure Components");
        return (
            <div>
                <h1>Pure Component</h1>
                {this.props.name}
            </div>
        )
    }
}

export default PureComp
