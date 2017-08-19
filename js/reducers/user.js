const initialState = {
    sbd: null,
    steem: null,
    isFetchingBalances: false
}

function user(state = initialState, action){
    switch (action.type){
        case 'FETCH_BALANCES':{
            return Object.assign({}, state, {
                isFetchingBalances: true
            })
        }
        case 'GET_BALANCES':{
            return Object.assign({}, state, {
                sbd: action.sbd,
                steem: action.steem,
                isFetchingBalances: false
            })
        }
        default:
            return state
    }
}

module.exports = user