import { NavigationActions } from 'react-navigation';
import { App } from '../App';

import { combineReducers } from 'redux';

const { router } = App

const firstAction = router.getActionForPathAndParams('Home');
const tempNavState = router.getStateForAction(firstAction);

const initialNavState = router.getStateForAction(
    tempNavState
);

function nav(state = initialNavState, action){
    let nextState;
    switch (action.type){
        case 'LOGGED_IN':
            nextState = router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'LOGGED_OUT':
            nextState = router.getStateForAction(
                NavigationActions.navigate({routeName: 'Login'}),
                state
            );
            break;
        case 'NAV_ADD_SUBJECT':
            nextState = router.getStateForAction(
                NavigationActions.navigate({routeName: 'AddSubject'}),
                state
            );
            break;
        case 'NAV_HOME':
            nextState = router.getStateForAction(
                NavigationActions.navigate({routeName: 'Home'}),
                state
            );
            break;
        default:
            nextState = router.getStateForAction(action, state);
            break;
        }
    return nextState || state
}


module.exports = nav