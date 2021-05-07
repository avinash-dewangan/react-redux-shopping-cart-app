import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'avinash'
        }
        console.log("LifeCycleA constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }

    //Update
    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, preveState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: 'talks techy'
        })
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <h2>LifeCycle Mehtod A</h2>
                <button onClick={this.changeState}> Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
