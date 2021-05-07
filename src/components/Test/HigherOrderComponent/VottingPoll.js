import React, { useState } from 'react'

function VottingPoll(Party, vote) {

    const NewCM = (props) => {
        const [voteCount, setvoteCount] = useState(0)
        const voteHandler = () => {
            setvoteCount(voteCount + vote)
        }
        return (
            <div>
                <Party
                    voteFor="CM"
                    hocVoteCount={voteCount}
                    hocVoteHandler={voteHandler}
                    {...props}
                />
            </div>
        )
    }
    return NewCM;

}

export default VottingPoll
