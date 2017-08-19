import { combineReducers } from 'redux';

module.exports = combineReducers({
    nav: require('./nav.js'),
    subjects: require('./subjects.js'),
})