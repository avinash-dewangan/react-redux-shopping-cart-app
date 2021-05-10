import React, { useContext } from 'react'


const NameContext = React.createContext();
const AgeContentx = React.createContext();


function UseContext() {
    return (
        <NameContext.Provider value={'avi'}>
            <AgeContentx.Provider value={30}>
                <ProviderCom />
            </AgeContentx.Provider>
        </NameContext.Provider>
    )
}

const ProviderCom = () => {
    const name = useContext(NameContext)
    const age = useContext(AgeContentx)
    return (
        <div>
            <h1>my name : {name}</h1>
            <h1>age : {age}</h1>
        </div>
    )

}



export default UseContext
