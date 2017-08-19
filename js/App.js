import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from './home/HomeScreen'
import AddSubjectScreen from './subject/AddSubjectScreen'

export const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    AddSubject: { screen: AddSubjectScreen }
  },
  {
    navigationOptions: (navigation) => ({
      headerMode: 'float',
    })
  }
)

const AppWithNavigationState = ({ dispatch, nav }) => (
  <App navigation={addNavigationHelpers({dispatch, state:nav})} />
);

// AppWithNavigationState.propTypes = {
//   dispatch: Proptypes.func.isRequired,
//   nav: Proptypes.object.isRequired
// }

function select(store){
  return {
    nav: store.nav
  }
}

export default connect(select)(AppWithNavigationState)