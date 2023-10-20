//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// create a component
const ButtonOptions = () => {
const navigation = useNavigation()

  const handleDev = () => {
    navigation.navigate("preDev" as never)
  }

  return (
    <View>
      <View style={{ borderTopWidth: 1, borderColor: "grey" }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin:4
         
        }}
      >
        <TouchableOpacity
          style={{
            width: 150,
            height: 30,
            paddingTop: 4,
            borderRadius: 6,
            margin: 10,
            borderWidth: 1,
            borderColor: "black",  
          }}
          onPress={handleDev}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <Feather name="codesandbox" size={17} color="black" />
              <Text>Orders</Text>
            </View>
            <AntDesign name="right" size={17} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 30,
            paddingTop: 4,
            borderRadius: 6,
            margin: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
          onPress={handleDev}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <AntDesign name="qrcode" size={17} color="black" />
              <Text>Qrcode</Text>
            </View>
            <AntDesign name="right" size={17} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin:4
        }}
      >
        <TouchableOpacity
          style={{
            width: 150,
            height: 30,
            paddingTop: 4,
            borderRadius: 6,
            margin: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
          onPress={handleDev}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <AntDesign name="customerservice" size={17} color="black" />
              <Text>Help Center</Text>
            </View>
            <AntDesign name="right" size={17} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 30,
            paddingTop: 4,
            borderRadius: 6,
            margin: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
          onPress={handleDev}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <AntDesign name="tagso" size={22} color="black" />
              <Text>Coupons</Text>
            </View>
            <AntDesign name="right" size={17} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ borderTopWidth: 1, borderColor: "grey" }} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default ButtonOptions;
