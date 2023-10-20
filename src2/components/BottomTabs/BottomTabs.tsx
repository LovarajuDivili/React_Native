//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ProfilePage from "../Dashboard/Profile/ProfilePage";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Foodpage from "../Dashboard/FoodPage";
import Activity from "../Dashboard/ActivityPage";
import { MaterialIcons } from "@expo/vector-icons";
import Createpage from "../Dashboard/CreatePage";
import MainPage from '../Dashboard/MainPage';
// create a component
const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
        <Tab.Screen
          name="main"
          component={MainPage}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }: { focused: boolean }) =>
              focused ? (
                <Ionicons name="md-home" size={24} color="blue" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="food"
          component={Foodpage}
          options={{
            tabBarLabel: "food",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }: { focused: boolean }) =>
              focused ? (
                <Ionicons name="fast-food" size={24} color="orange" />
              ) : (
                <Ionicons name="fast-food-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="activity"
          component={Activity}
          options={{
            tabBarLabel: "activity",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }: { focused: boolean }) =>
              focused ? (
                <MaterialIcons name="favorite" size={24} color="red" />
              ) : (
                <MaterialIcons name="favorite-border" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="create"
          component={Createpage}
          options={{
            tabBarLabel: "create",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }: { focused: boolean }) =>
              focused ? (
                <Ionicons name="create" size={24} color="blue" />
              ) : (
                <Ionicons name="create-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfilePage}
          options={{
            tabBarLabel: "profile",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }: { focused: boolean }) =>
              focused ? (
                <FontAwesome name="user-circle-o" size={24} color="blue" />
              ) : (
                <FontAwesome5 name="user-circle" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
  );
};



//make this component available to the app
export default BottomTabs;
