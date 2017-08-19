/* @flow */

import React, { PureComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { TabViewAnimated, TabBar } from "react-native-tab-view";
import type { NavigationState } from "react-native-tab-view/types";

import DayScreen from "./DayScreen";

type Route = {
  key: string,
  title: string
};

type State = NavigationState<Route>;

class WeekScreen extends PureComponent<void, *, State> {
  state: State = {
    index: 0,
    routes: [
      { key: "1", title: "Monday" },
      { key: "2", title: "Tuesday" },
      { key: "3", title: "Wednesday" },
      { key: "4", title: "Thursday" },
      { key: "5", title: "Friday" }
    ]
  };

  _handleIndexChange = index => {
    this.setState({
      index
    });
  };

    _renderPager = props => {
        const { width, position } = props;
        console.log('width: '+  width)
        console.log('position ' + position)
    };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "1":
        return <DayScreen day="Monday" />;
      case "2":
        return <DayScreen day="Tuesday" />;
      case "3":
        return <DayScreen day="Wednesday" />;
      case "4":
        return <DayScreen day="Thursday" />;
      case "5":
        return <DayScreen day="Friday" />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={this._handleIndexChange}
        onRequestChangeTab={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbar: {
    backgroundColor: "#222"
  },
  tab: {
    width: 120
  },
  indicator: {
    backgroundColor: "#ffeb3b"
  },
  label: {
    color: "#fff",
    fontWeight: "400"
  },
  headerRight: {
    padding: 10
  }
});

module.exports = WeekScreen;
