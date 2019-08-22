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
      toValue: 1,
      duration: 1500
    }).start(() => {
      this.state.animation.setValue(0);
    });
  };

  xInterpolate = this.state.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

  yInterpolate = this.state.animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "0deg", "180deg"]
  });

  animatedStyle = {
    transform: [{ rotateX: this.xInterpolate }, { rotateY: this.yInterpolate }]
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, this.animatedStyle]}>
            <Animated.Text style={styles.textStyle}>Regular Box</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
