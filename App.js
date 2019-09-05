/**
 * @format
 * @flow
 */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

import { interpolateNumber, interpolateRgb } from "d3-interpolate";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.positionInterpolate = interpolateNumber(0, 200);
    this.colorInterpolate = interpolateRgb(
      "rgb(255, 99, 71)",
      "rgb(99, 71, 255)"
    );

    this.state.animation.addListener(({ value }) => {
      const position = this.positionInterpolate(value);
      const color = this.colorInterpolate(value);

      const style = [
        styles.box,
        {
          backgroundColor: color,
          transform: [{ translateY: position }]
        }
      ];

      this._view.setNativeProps({ style });
    });
  }

  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {};

  handlePress = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500
    }).start();
  };

  animatedStyle = {};

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.box} ref={view => (this._view = view)}>
            <Text style={styles.textStyle}>Regular Box</Text>
          </View>
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
