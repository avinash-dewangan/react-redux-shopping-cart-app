import React from 'react'
import { connect } from "react-redux"

function Profile(props) {
    return (
        <div>
            {props.formdata.firstName}
            {props.formdata.lastName}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        formdata: state.form.myform.values
    }
}

export default connect(mapStateToProps)(Profile)
