const initialState = {
    user: {}
}

export const selectUser = (stuff) => {
    return {
        type: 'Get',
        payload: stuff
    }
}

export const updateUser = (stuff) => {
    return {
        type: "Update",
        payload: stuff
    }
}

// What should be done to our initial state?
const categoryReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch (type) {
        case 'Get':
            return state;
        case 'Update':
            return {user: payload};
        default:
            return state;
    }

    // this returns the new state.
}

export default categoryReducer;