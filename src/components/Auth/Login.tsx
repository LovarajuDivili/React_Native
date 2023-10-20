import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logintoHome } from "../../store/slices/Sample/DataSlice";
import { isLoading } from "../../store/slices/Sample/DataSlice";
type Props = {
  navigation: any;
};

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigations = useNavigation<any>();
  const dispatch = useDispatch();

  const logEmail = "admin@gmail.com";
  const logPass = "admin";

  const submitHandler = async () => {
    console.log("CLICKED");
    if (!email || !password) {
      Alert.alert("Please fill in both email and password fields.");
      return;
    }

    if (email === logEmail && password === logPass) {
      dispatch(logintoHome(true));
      dispatch(isLoading(false));
      //const loggedInEmail = await AsyncStorage.getItem('loggedInEmail');
      setEmail("");
      setPassword("");
      setTimeout(() => {
        Alert.alert("Signin Successful");
      }, 4000);
    } else {
      Alert.alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "50%" }}>
        <Text style={styles.login}>Signin</Text>
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
        <TouchableOpacity style={{ marginTop: 8 }} onPress={submitHandler}>
          <Text
            style={styles.loginButton}
            //onPress={() => navigation.navigate("tabs")}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Don't have any account?</Text>
          <Text
            style={{ marginLeft: 10, color: "#2213c6" }}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign up
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
});

export default Login;
