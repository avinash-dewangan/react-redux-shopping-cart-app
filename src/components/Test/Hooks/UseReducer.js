import React, { useReducer } from 'react'

const InitialState = {
    name: "ramesh",
    wish: ['eat', 'code', 'sleep']
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}


function UseReducer() {
    const [data, dispatch] = useReducer(reducer, InitialState)
    const [data2, dispatch2] = useReducer(reducer, InitialState)
    const getName = () => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res2 => {
            dispatch({ type: 'CHANGE_NAME', payload: res2[0].name })
        })
    }

    return (
        <div>
            <h1>use Reducer</h1>
            <h1>my name:{data.name}</h1>
            <h1>I wish to {data.wish[0]}</h1>
            {/* if pass any argument use this type */}
            <button onClick={() => getName()}>Change Name with parameter</button>
            {/* if you no need argument pass use this type */}
            <button onClick={getName}>Change Name without parameter</button>
            <h2>i am {data2.name}</h2>
            <h2>i wish to {data.wish[1]}</h2>
            <button onClick={() => dispatch2({ type: 'CHANGE_NAME', payload: 'avi' })}>Change Name 2</button>
        </div >
    )
}

export default UseReducer
