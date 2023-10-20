//import liraries
import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { logintoHome } from "../../store/slices/Sample/DataSlice";
import { useDispatch } from "react-redux";

interface HeaderProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = (props) => {

  const navigation = useNavigation<any>();
  const dispatch = useDispatch()

  const handleSignOut = async () => {
    dispatch(logintoHome(false))
    Alert.alert("Signout Successfull");
  };

  return (
    <View style={{ flexDirection: "row", justifyContent:"space-between" }}>
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      
    </View>
    <TouchableOpacity
      style={{
        
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={handleSignOut}
      >
        <Ionicons name="exit-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const HeaderButton = (props: any) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      marginLeft:10
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default Header;
