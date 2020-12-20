const initialState = {
    plants1: [],
}

export const selectUser = (stuff) => {
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

export const updatePlants = (stuff) => {
    return {
        type: "Update",
        payload: stuff
    }
}

// What should be done to our initial state?
const plantReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch (type) {
        case 'Get':
            return state;
        case 'Set':
            return payload;
            case 'Update':
                return [...state, payload]
        default:
            return state;
    }

    // this returns the new state.
}

export default plantReducer;