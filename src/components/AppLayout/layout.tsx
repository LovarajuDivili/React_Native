import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import About from "../Screens/restaurantDetails/About";
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { sampleSelector } from "../../store/selector";
import { useSelector } from "react-redux";
import Loader from "../Screens/Loder";
import RestaurantDetail from "../Screens/RestaurantDetail";
import { NavigationContainer } from "@react-navigation/native";

const Layout: React.FC = () => {
  const Stack = createStackNavigator();
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Layout;


