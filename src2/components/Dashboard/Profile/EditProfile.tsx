import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";

const EditProfile = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const navigateToEdit = () => {
    setModalVisible(!isModalVisible);
  };
  

  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          margin: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Hey!
          <Text style={{ color: "blue", fontSize: 16, fontWeight: "600" }}>
            Lovaraju Divili
          </Text>
        </Text>
        <TouchableOpacity onPress={navigateToEdit}>
          <Feather name="edit-2" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={navigateToEdit}>
              <AntDesign name="back" size={24} color="brown" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              manage Your Account
            </Text>
          </View>

          <View style={{ margin: 20, padding: 10 }}>
            <TextInput
              placeholder="edit your name..."
              style={{
                borderRadius: 6,
                height: 40,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                margin: 8,
              }}
            />
            <TextInput
              placeholder="edit your password..."
              style={{
                borderRadius: 6,
                height: 40,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                margin: 8,
              }}
            />
            <TextInput
              placeholder="edit your mobile Number..."
              style={{
                borderRadius: 6,
                height: 40,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                margin: 8,
              }}
            />
            <TextInput
              placeholder="edit your email..."
              style={{
                borderRadius: 6,
                height: 40,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                margin: 8,
              }}
            />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                marginTop: 40,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    width: 180,
                    textAlign: "center",
                    height: 40,
                    paddingTop: 8,
                    borderRadius: 6,
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={navigateHome}>
                <Text
                  style={{
                    color: "white",
                    backgroundColor: "purple",
                    width: 140,
                    textAlign: "center",
                    height: 30,
                    paddingTop: 4,
                    borderRadius: 6,
                  }}
                >
                  Go to Home page
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  welcomeText: {
    color: "blue",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  modalContent: {
    display: "flex",
    //flexDirection:"row",
    backgroundColor: "white",
    padding: 22,
    borderRadius: 4,
  },
});

export default EditProfile;
