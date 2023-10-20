import React, { Component, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Auth