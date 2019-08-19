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

  startAnimation() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 300
      }).start();
    });
  }

  animatedInterpolate = this.state.animation.interpolate({
    inputRange: [0, 1, 2], // always must be increasing
    outputRange: [0, 300, 0]
  });

  interpolatedInterpolate = this.animatedInterpolate.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5]
  });

  translateXInterpolate = this.animatedInterpolate.interpolate({
    inputRange: [0, 30, 50, 80, 100, 150, 299, 300],
    outputRange: [0, -30, -50, 80, -100, 300, 0, -100]
  });

  animatedStyle = {
    transform: [
      { translateY: this.animatedInterpolate },
      { translateX: this.translateXInterpolate }
    ],
    opacity: this.interpolatedInterpolate
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.startAnimation()}>
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
