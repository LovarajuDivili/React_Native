//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ProDev = () => {
  return (
    <View style={styles.container}>
      <Text>It Is in Development </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fb',
  },
});

//make this component available to the app
export default ProDev;
