/**
 * @format
 * @flow
 */

import React from "react";
import { View, StyleSheet, Animated } from "react-native";

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  animatedStyle = {};

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, this.animatedStyle]}
          {...this._panResponder.panHandlers}
        >
          <Animated.Text style={styles.textStyle}>Regular Box</Animated.Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 125,
    height: 125,
    backgroundColor: "tomato",
    borderRadius: 10
  },
  textStyle: {
    marginLeft: 10,
    marginTop: 10
  }
});
