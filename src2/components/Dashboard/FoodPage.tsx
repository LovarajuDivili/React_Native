//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Foodpage = () => {
  return (
    <View style={styles.container}>
      <Text>Foodpage</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90dd99',
    color:"white"
  },
});

//make this component available to the app
export default Foodpage;
