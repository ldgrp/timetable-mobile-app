const initialState = {
    title: '',
}

function title(state = initialState, action){
    switch (action.type){
        case 'NAV_BALANCE':
            return Object.assign({}, state, {
                title: action.details
            })
        default:
            return state;
        }
}

module.exports = title