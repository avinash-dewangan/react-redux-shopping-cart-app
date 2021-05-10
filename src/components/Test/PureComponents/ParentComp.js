import React, { PureComponent } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: 'talks techy'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'talks techy!'
            })
        }, 20000);
    }
    render() {
        console.log("Parent Components");
        return (
            <div>
                <h1>Parent Component</h1>
                <div className="row">

                    <div className="col">
                        <PureComp name={this.state.name} />
                    </div>
                    <div className="col">
                        <RegComp name={this.state.name} />
                    </div>
                </div>



            </div>
        )
    }
}

export default ParentComp
