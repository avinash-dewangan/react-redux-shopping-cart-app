import React from 'react'
import Bjp from "./Bjp"
import Aap from "./Aap"

function HigherOrderComponent() {
    return (
        <div>
            <h1>Higher Order Component</h1>
            <Bjp candidate="Manoj Tiwari" />
            <Aap candidate="Arvind Kejriwal" />
        </div>
    )
}

export default HigherOrderComponent
