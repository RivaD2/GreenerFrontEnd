const initialState = {
    terrarium1: []
}

export const selectTerrarium = (stuff) => {
    return {
        type: 'Get',
        payload: stuff
    }
}

export const setTerrarium = (stuff) => {
    return {
        type: "Set",
        payload: stuff
    }
}

// What should be done to our initial state?
const terrariumReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch (type) {
        case 'Get':
            return state;
        case 'Set':
            return {terrarium1: payload};
        default:
            return state;
    }

    // this returns the new state.
}

export default terrariumReducer;