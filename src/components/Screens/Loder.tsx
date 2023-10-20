//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';

// create a component
const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:"center"}}>
      <ActivityIndicator size="large" color="#3e88e8" />
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
    backgroundColor: "#151617",
    color: "white",
  },
});

//make this component available to the app
export default Loader;
