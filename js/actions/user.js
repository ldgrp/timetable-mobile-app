function _fetchBalances(){
    return {
        type: 'FETCH_BALANCES',
    }
}

function _getBalances(sbd, steem){
    return {
        type: 'GET_BALANCES',
        sbd: sbd,
        steem: steem,
    }
}

module.exports = { }