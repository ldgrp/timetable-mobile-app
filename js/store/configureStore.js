import { AsyncStorage } from 'react-native';
import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from '../reducers'

var appStore = applyMiddleware(thunk)(createStore)

function configureStore(){
    const store = autoRehydrate()(appStore)(reducers);
    persistStore(store, {storage: AsyncStorage}).purge();
    return store;
}

module.exports = configureStore