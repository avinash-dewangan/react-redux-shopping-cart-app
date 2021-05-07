import React, { useState } from 'react'
import VottingPoll from "./VottingPoll"
function Bjp(props) {


    return (
        <div>
            <h2>BJP {props.voteFor} Candiate : {props.candidate}</h2>
            <h5 onMouseOver={props.hocVoteHandler}>Total Vote:{props.hocVoteCount}</h5>
        </div>
    )
}

export default VottingPoll(Bjp, 10)
