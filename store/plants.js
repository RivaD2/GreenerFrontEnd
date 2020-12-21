const initialState = {
    plants1: []
}

export const selectPlants = (stuff) => {
    return {
        type: 'Get',
        payload: stuff
    }
}

export const setPlants = (stuff) => {
    return {
        type: "Set",
        payload: stuff
    }
}

// What should be done to our initial state?
const plantsReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch (type) {
        case 'Get':
            return state;
        case 'Set':
            return {plants1: payload};
        default:
            return state;
    }

    // this returns the new state.
}

export default plantsReducer;