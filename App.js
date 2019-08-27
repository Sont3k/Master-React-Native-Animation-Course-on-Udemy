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
    Animated.spring(this.state.animation, {
      toValue: 300,
      useNativeDriver: true
    }).start(() => {
      this.state.animation.setValue(0);
    });

    setTimeout(() => {
      let i = 0;
      while (i <= 500000000) {
        i++;
      }
    }, 500);
  };

  animatedStyle = {
    transform: [{ translateY: this.state.animation }]
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
