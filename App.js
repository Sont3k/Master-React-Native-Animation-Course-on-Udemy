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
} from 'react-native';

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(100)
  };

  startAnimation() {
    Animated.timing(this.state.animation, {
      toValue: 600,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  }

  arbitraryValue = 50;
  // newAnimation = Animated.add(this.state.animation, this.arbitraryValue);
  newAnimation = Animated.divide(this.state.animation, this.arbitraryValue);

  animatedStyle = {
    transform: [{ translateY: this.newAnimation }]
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
