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

const userReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch (type) {
        case 'Get':
            return state;
        case 'Update':
            return {user: payload};
        default:
            return state;
    }
}

export default userReducer;