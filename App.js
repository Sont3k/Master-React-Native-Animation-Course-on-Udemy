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
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1)
  };

  handlePress() {
    Animated.stagger(200, [
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300
      })
    ]).start();
  }

  backgroundInterpolate = this.state.colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"]
  });

  boxStyle = {
    backgroundColor: this.backgroundInterpolate,
    transform: [
      {
        scale: this.state.scaleAnimation
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.handlePress()}>
          <Animated.View style={[styles.box, this.boxStyle]}>
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
