/**
 * @format
 * @flow
 */

import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 1500
    }).start(() => {
      this.state.animation.setValue(0);
    });
  };

  colorInterpolate = this.state.animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["rgb(71, 255, 99)", "rgb(255, 99, 71)", "rgb(99, 71, 255)"]
  });

  backgroundColorInterpolate = this.state.animation.interpolate({
    inputRange: [0, 2],
    outputRange: ["rgba(255, 99, 71, 1)", "rgba(255, 99, 71, 0)"]
  });

  animatedStyle = {
    backgroundColor: this.colorInterpolate
  };

  backgroundColorStyle = {
    backgroundColor: this.backgroundColorInterpolate
  };

  render() {
    return (
      <Animated.View style={[styles.container, this.backgroundColorStyle]}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, this.animatedStyle]}>
            <Animated.Text style={styles.textStyle}>Regular Box</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
