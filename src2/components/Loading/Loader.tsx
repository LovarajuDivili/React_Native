//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import LoaderKit from 'react-native-loader-kit'

// create a component
const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        <ActivityIndicator size="large" color="#3e88e8" />
        {/* <LoaderKit
          style={{ width: 50, height: 50 }}
          name={"BallPulse"} // Optional: see list of animations below
          size={50} // Required on iOS
          color={"red"} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
        /> */}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232424",
    color: "white",
  },
});

//make this component available to the app
export default Loader;
