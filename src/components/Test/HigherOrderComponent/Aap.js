import React, { useState } from 'react'
import VottingPoll from "./VottingPoll"
function Aap(props) {

    return (
        <div>
            <h2>APP {props.voteFor} Candiate : {props.candidate}</h2>
            <h5 onMouseOver={props.hocVoteHandler}>Total Vote:{props.hocVoteCount}</h5>
        </div>
    )
}

export default VottingPoll(Aap, 5)
