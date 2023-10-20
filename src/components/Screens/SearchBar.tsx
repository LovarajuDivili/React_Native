
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete 
      placeholder='Search'
      renderLeftButton={() => (
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>
      )}
      renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 5,
              backgroundColor: "#eee",
              padding: 7,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      styles={{
        textInput: {
          backgroundColor: "white",
          borderRadius: 10,
          fontWeight: "700",
          marginTop: 1,
        },
        textInputContainer: {
          backgroundColor: "white",
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 2,
        },
      }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SearchBar;
