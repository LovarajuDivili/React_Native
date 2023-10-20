import React, { Component, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  
} from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { useDispatch, useSelector } from "react-redux";


type Props = {
  navigation: any;
};

const SignUp = ({ navigation }: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [avatar, setAvatar] = React.useState(null);
  


  const Register = () => {
    
  };

  // const pickImage = async () => {
  //   // let result = await ImagePicker.launchImageLibraryAsync({
  //   //   mediaTypes: ImagePicker.MediaTypeOptions.All,
  //   //   allowsEditing: true,
  //   //   aspect: [4, 3],
  //   //   quality: 1,
  //   // });

  //   // if (!result.canceled) {
  //   //   setAvatar(result.assets[0].uri);
  //   // }
  // };

  return (
   
    <View style={styles.container}>
      <View style={{ width: "50%" }}>
        <Text style={styles.login}>Sign Up</Text>
        <TextInput
          placeholder="Enter your name..."
          style={styles.emailInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Enter your email..."
          style={styles.emailInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Enter your Password..."
          style={styles.emailInput}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          //onPress={() => pickImage()}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Image
            source={{
              uri: avatar
                ? avatar
                : "https://cdn-icons-png.flaticon.com/128/568/568717.png",
            }}
            style={[styles.uploadImage]}
          />
          <Text
            style={{ paddingLeft: 6, paddingTop: 8, fontSize: 16 }}
            //onPress={pickImage}
          >
            upload image
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 8 }}>
          <Text style={styles.loginButton} onPress={Register}>
            Signup
          </Text>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Allready have an account?</Text>
          <Text
            style={{ marginLeft: 10, color: "#2213c6" }}
            onPress={() => navigation.navigate("Login")}
          >
            Sign in
          </Text>
        </View>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9f0f7",
  },
  login: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  emailInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    margin: 6,
    marginLeft: "-0%",
    padding: 10,
  },
  loginButton: {
    width: "100%",
    color: "#ffffff",
    backgroundColor: "#050505",
    fontSize: 20,
    paddingTop: 8,
    height: 40,
    textAlign: "center",
  },
  uploadImage: {
    height: 40,
    width: 40,
  },
});

export default SignUp;
