//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import EditProfile from "./EditProfile";
import ButtonOptions from "./ButtonOptions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfilePage = () => {
  const navigation = useNavigation();
  const handleLogout = async() => {
    await AsyncStorage.removeItem("loginEmail");
    navigation.navigate("Login" as never)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <EditProfile />
        <ButtonOptions />

        <View style={{display:"flex", justifyContent: 'center',marginTop:"140%", marginLeft:"16%"}}>
          <TouchableOpacity
            style={{
              width: 250,
              height: 35,
              paddingTop: 4,
              borderRadius: 6,
              margin: 10,
              borderWidth: 1,
              borderColor: "red",
            }}
            onPress={handleLogout}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Text style={{color:"red"}}>Signout</Text>
              </View>
              <AntDesign name="logout" size={24} color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

//make this component available to the app
export default ProfilePage;
