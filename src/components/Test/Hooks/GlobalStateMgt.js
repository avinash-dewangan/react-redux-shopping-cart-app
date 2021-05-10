import React, { useContext, useReducer } from 'react'

const myContxt = React.createContext();

const iState = {
    name: "ramesh"
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
const Coder3 = () => {
    const myname = useContext(myContxt);
    return (
        <>
            <h1>i am coder 3</h1>
            <h2>{myname.name}</h2>
            <button onClick={() => myname.changeName({ type: 'CHANGE_NAME', payload: 'avi' })}>lets change it</button>
        </>
    )
}
const Coder2 = () => {
    const myname = useContext(myContxt)
    return (
        <>
            <h1>i am coder 2</h1>
            <h2>{myname.name}</h2>
            <button onClick={() => myname.changeName({ type: 'CHANGE_NAME', payload: 'suresh' })}>lets change it</button>
            <Coder3 />
        </>
    )
}
const Coder = () => {
    const myname = useContext(myContxt)
    return (
        <>
            <h1>i am coder 1</h1>
            <h2>{myname.name}</h2>
            <Coder2 />
        </>
    )
}


function GlobalStateMgt() {
    const [data, dispatch] = useReducer(reducer, iState)
    return (
        <div>
            <myContxt.Provider value={{ name: data.name, changeName: dispatch }}>
                <Coder />
            </myContxt.Provider>

        </div>
    )
}

export default GlobalStateMgt
