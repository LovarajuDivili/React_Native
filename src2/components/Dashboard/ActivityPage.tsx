//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Activity = () => {
  return (
    <View style={styles.container}>
      <Text>Activity</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1c3e4',
    color:"white"
  },
});

//make this component available to the app
export default Activity;
