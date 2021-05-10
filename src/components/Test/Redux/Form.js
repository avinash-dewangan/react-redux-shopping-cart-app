import React, { useState } from 'react'

import { connect } from "react-redux"
function Form(props) {

    const [name, setname] = useState('')
    const [lname, setlname] = useState('')


    const onSubmitButtonClick = () => {
        props.submitHandler(name, lname)
    }
    return (
        <div>{name}{lname}
            <from>
                <input type="text"
                    value={name}
                    onChange={(e) => {
                        setname(e.target.value)
                    }}
                />
                <input type="text"
                    value={lname}
                    onChange={(e) => {
                        setlname(e.target.value)
                    }}
                />

                <button onClick={onSubmitButtonClick} >submit</button>
            </from>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitHandler(name, lname) {
            dispatch({ type: 'SUBMIT', payload: { fname: name, lname: lname } })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.reducer.fname,
        lname: state.reducer.lname,
    }
}



export default connect(null, mapDispatchToProps)(Form)
