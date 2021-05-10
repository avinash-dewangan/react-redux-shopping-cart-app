import React, { Component } from "react"

class FormClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "alxe",
            email: "",
            mobileNumber: "",
            address: "",
            gender: "",
            checkBoxName: {
                football: false,
                cricket: false,
                hocky: false
            },
            selectBox: '',
            tnc: false,
            selectFile: null
        }
        //insted of use this statement you can use arrow function bind handler
        // this.onChangeHandler = this.onChangeHandler.bind(this)
        // this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }


    //instate of this function write here you write in input tag as annonmys function
    // onChangeHandler = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    //     console.log(event.target.value)
    // }
    // onChangeHandlerEmail = (event) => {
    //     this.setState({
    //         email: event.target.value
    //     })
    //     console.log(this.state.email)
    // }

    onChangeHander = (e) => {
        if (e.target.type === "checkbox") {
            if (e.target.name === "tnc") {
                this.setState({ [e.target.name]: e.target.checked })
            } else {
                const { name, checked } = e.target
                this.setState((e) => {
                    var selectedPort = e.checkBoxName;
                    return selectedPort[name] = checked
                })
            }

        } else if (e.target.type === "file") {
            this.setState({
                selectFile: e.target.files[0]
            })
            console.log(e.target.files[0])
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }
        console.log(e)
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.name, this.state.email, this.state.mobileNumber, this.state.address, this.state.gender, this.state.checkBoxName, this.state.selectBox, this.state.tnc, this.state.selectFile)
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmitHandler}>
                    <label>name</label>
                    {/* <input value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />
                    <input value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} /> */}
                    <label>name</label>
                    <input name="name" value={this.state.name} onChange={this.onChangeHander} /><br />
                    <label>email</label>
                    <input name="email" value={this.state.email} onChange={this.onChangeHander} /><br />
                    <label>Mobile</label>
                    <input name="mobileNumber" value={this.state.mobileNumber} onChange={this.onChangeHander} /><br />
                    <label>address</label>
                    <textarea name="address" value={this.state.address} onChange={this.onChangeHander} /><br />

                    {/* radio button */}
                    <label htmlFor="">male</label>
                    <input name="gender" type="radio" value="male" onChange={this.onChangeHander} />
                    <label htmlFor="">female</label>
                    <input name="gender" type="radio" value="female" onChange={this.onChangeHander}

                    /><br />
                    <label htmlFor="">office</label>
                    <input type="checkbox" value="office" name="football" onChange={this.onChangeHander} />
                    <label htmlFor="">remote</label>
                    <input type="checkbox" value="remote" name="cricket" onChange={this.onChangeHander} />
                    <label htmlFor="">temporary</label>
                    <input type="checkbox" value="temporary" name="hocky" onChange={this.onChangeHander} />
                    <br />

                    <select name="selectBox" onChange={this.onChangeHander}>
                        <option value="select option">select option</option>
                        <option value="home">home</option>
                        <option value="office">office</option>
                    </select>
                    <br />
                    <br />
                    {/* <input onChange={this.onChangeHander} type="checkbox" name="tnc" value=""></input><span>*Accept term and conditon</span> */}
                    <br />
                    <input type="file" onChange={this.onChangeHander} />
                    <br />
                    <button type="submit">submit</button>
                </form>
            </>
        )
    }
}

export default FormClass