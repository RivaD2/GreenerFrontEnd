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
    console.log('in setTerriarum', stuff);
    return {
        type: "Set",
        payload: stuff
    }
}

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
}

export default terrariumReducer;