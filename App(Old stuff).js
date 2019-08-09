/**
 * @format
 * @flow
 */

import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };

  handlePress = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2, // how quicker spring will slow down
      tension: 160 // add energy to the spring
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100,
      }).start()
    });

    Animated.loop(
      Animated.timing(this.state.animation, {
        toValue: 100,
        duration: 1500
      })
    ).start();
  };

  

  interpolated = this.state.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

  animatedStyles = {
    // transform: [
    //   {
    //     scale: this.state.animation
    //   }
    // ],
    transform: [
      {
        translateY: this.state.animation
      }
    ]
  };

  backgroundInterpolate = this.state.animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"]
  });

  backgroundStyle = {
    backgroundColor: backgroundInterpolate
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={
            // this.state.animation.setValue(e.nativeEvent.contentOffset.y);
            Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.state.animation
                  }
                }
              }
            ])
          }
        >
          <Animated.View style={styles.content} />
        </ScrollView>
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
  content: {
    height: 3000
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
