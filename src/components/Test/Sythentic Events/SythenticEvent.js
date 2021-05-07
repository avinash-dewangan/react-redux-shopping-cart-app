import React, { Component } from 'react'

class SythenticEvent extends Component {

    // step1
    //clickHandler = e => console.log(e.target.tagName)

    //step2


    render() {
        return (
            <div>

                <h1>preventDefault changing the stop behaviour</h1>

                <a href="google.com" onClick={this.clickSubmit = (e) => {
                    e.preventDefault();
                }}>Click Link</a>


                <h1>Capturing top to bottom</h1>

                <div onClickCapture={this.handleClickViaCapturing = () => {
                    console.log("capture")
                }}>
                    <div id="one" onClick={this.one = () => { console.log("one") }} style={{ width: "300px", height: "300" }}>1
                    <div id="two" onClick={this.two = () => { console.log("tow") }} style={{ width: "200px", height: "200" }}>2
                        <div className="three" onClick={this.three = (e) => {
                                e.stopPropagation();
                                console.log("three")
                            }} style={{ width: "200px", height: "200" }}>3</div>
                        </div>
                    </div>
                </div>

                <h1>Bubbling: bottom to top</h1>
                <div id="one" onClick={this.one = () => { console.log("one") }} style={{ width: "300px", height: "300" }}>1
                    <div id="two" onClick={this.two = () => { console.log("tow") }} style={{ width: "200px", height: "200" }}>2
                        <div className="three" onClick={this.three = (e) => {
                            e.stopPropagation();
                            console.log("three")
                        }} style={{ width: "200px", height: "200" }}>3</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SythenticEvent
