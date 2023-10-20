import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const logEmail = "admin@gmail.com";
  const logPass = "admin";

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const email = await AsyncStorage.getItem("loginEmail");

        if (email) {
          setTimeout(() => {
            navigation.navigate("Main" as never)
          }, 400);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, []);

  
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Please fill in both email and password fields.");
      // Toast.show({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: 'Please fill in both email and password fields.',
      // });
      return;
    }

    if (email === logEmail && password === logPass) {
      console.log("CLICKED");
      navigation.navigate("Main" as never);
      await AsyncStorage.setItem("loginEmail", email);
      setEmail("");
      setPassword("");
      // setTimeout(() => {
      //   Toast.show({
      //     type: 'success',
      //     text1: 'Success',
      //     text2: 'Signin Successful',
      //   });
      // }, 4000);
      setTimeout(() => {
        Alert.alert("Signin Successful");
      }, 4000);
    } else {
      Alert.alert("Invalid email or password. Please try again.");
      // Toast.show({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: 'Invalid email or password. Please try again.',
      // });
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate("SignUp" as never);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center"}}
    >
      <View style={{ marginTop: "40%" }}>
        <Image
          style={{
            width: 150,
            height: 100,
            resizeMode: "contain",
            borderRadius: 100,
          }}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25 }}>
            Login to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={"gray"}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="enter your Email"
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 5,
              }}
            >
              <AntDesign
                style={{ marginLeft: 8 }}
                name="lock"
                size={24}
                color="gray"
              />
              <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor={"gray"}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="enter your Password"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <Text>Keep me logged in</Text>
            <Text style={{ fontWeight: "500", color: "#007FFF" }}>
              Forgot Password
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 45 }} />

        <Pressable
          onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: "black",
            padding: 15,
            marginTop: 40,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable onPress={handleSignUpPress} style={{ marginTop: 10 }}>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Don't have an account? <Text style={{color:"#007FFF"}}>Sign up</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
