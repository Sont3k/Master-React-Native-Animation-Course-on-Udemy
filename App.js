/**
 * @format
 * @flow
 */

import React from "react";
import { View, StyleSheet, Animated, Button } from "react-native";

const AnimatedButton = Animated.createAnimatedComponent(Button);

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  setNativeProps = props => {
    this.button.setNativeProps(props);
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 300
      }).start();
    });
  };

  animatedStyle = {};

  render() {
    const animatedColor = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"]
    });

    return (
      <View style={styles.container}>
        <AnimatedButton
          ref={ref => {
            this.button = ref;
          }}
          onPress={this.startAnimation}
          title="Regular button"
          color={animatedColor}
        />
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
