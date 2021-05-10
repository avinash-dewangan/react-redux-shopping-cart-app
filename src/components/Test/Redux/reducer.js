const initialState = {
    fname: '',
    lname: ''
}

export const reducer = (state = initialState, action) => {
    if (action.type === 'SUBMIT') {
        console.log(action.payload)

        return action.payload
    }
    return state
}

export default reducer
export { initialState }