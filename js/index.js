import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import configureStore from './store/configureStore';
import App from './App';

export default function setup(){
    class Root extends Component{
        state = {
            isLoading: true,
            store: null,
        }

        async componentWillMount(){
            var store = await configureStore()
            var assetsAreLoaded = await this._loadAssetsAsync()
            this.setState({
                isLoading:false,
                store:store
            })
        }

        async _loadAssetsAsync() {
            try {
                await Promise.all([
                    Font.loadAsync({
                    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
                    "roboto-medium": require("../assets/fonts/Roboto-Medium.ttf"),
                    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
                    "roboto-bold-italic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
                    "roboto-black": require("../assets/fonts/Roboto-Black.ttf"),
                    })
                ])
            } catch (e){
                console.warn("There was an error caching assets (see: App.js).");
                console.log(e);
            } finally {
                return true
            }
        }
        render(){
            if (this.state.isLoading){
                return null;
            }
            return (
                <Provider store={this.state.store}>
                    <App />
                </Provider>
            );
        }
    }

    return <Root />;
}