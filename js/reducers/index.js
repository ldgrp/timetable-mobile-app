import { combineReducers } from 'redux';

module.exports = combineReducers({
    nav: require('./nav.js'),
    title: require('./title.js'),
    user: require('./user.js'),
    subjects: require('./subjects.js'),
})