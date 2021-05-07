import LifeCycle from "./LifeCycleMethod/LifeCycle"

import React from 'react'
import PureComponent from "./PureComponents/PureComp"
import RegComp from "./PureComponents/RegComp"
import ParentComp from "./PureComponents/ParentComp"
import SythenticEvent from "./Sythentic Events/SythenticEvent"

function Test() {
    return (
        <div style={{ textAlign: "center" }}>
            {/* 
            <ParentComp />
            <LifeCycle></LifeCycle>
            */}
            <SythenticEvent />

        </div>
    )
}

export default Test
export const flag = false

