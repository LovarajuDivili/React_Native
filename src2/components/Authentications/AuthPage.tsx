import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import BottomTabs from "../BottomTabs/BottomTabs";
import ProDev from "../Dashboard/Profile/ProDev";


const AuthPage = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="preDev"
        component={ProDev}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthPage;
