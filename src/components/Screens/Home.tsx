import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import RestaurantItems from "./RestaurantItems";
import { localRestaurants } from "../../DummyData";
import { chatConfig, chatWindow } from "kore-web-sdk";
import { Divider } from "react-native-elements";

const YELP_API_KEY = "dummy";

const Home: React.FC = ({navigation}) => {
  const [activeTab, setActiveTab] = React.useState("Delivery");
  const [restaurentdata, setRestaurentdata] = React.useState(localRestaurants);
  const [city, setCity] = React.useState("San Francisco");

  // const getRestaurantsFromYelp = () => {
  //   // const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  //   const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };

  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) =>
  //     console.log(json.businesses)
  //     //setRestaurentdata(json.businesses)
  //       )

  // };

  // React.useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, [city, activeTab]);

  React.useEffect(() => {
    let botOptions = chatConfig.botOptions;

    botOptions.JWTUrl = "https://demo.kore.net/users/sts";
    botOptions.userIdentity = "lovaraju.divili@aifalabs.com";
    botOptions.botInfo = {
      name: "All Dialogs",
      _id: "st-19acbca9-90ab-596e-b872-1ec8510c795e",
    }; // bot name is case sensitive
    botOptions.clientId = "cs-a1d6272a-9b54-5a44-b9c8-c484266ea28e";
    botOptions.clientSecret = "+0Kc5Tv/GwxYQXq4kwbbcARCZMA/UYfXgogLbr8diTY=";

    var chatWindowInstance = new chatWindow(chatConfig);

    // chatWindowInstance.on("onChatHistoryResponse", (historyResponse:any) => {
    //   console.log("chat history is called", historyResponse);
    // });

    // chatWindowInstance.on(
    //   "onChatHistoryResponse",
    //   (historyResponse:any, chatWindowEvent:any) => {
    //     console.log("chat history is called", historyResponse);
    //   }
    // );

    chatWindowInstance.show(chatConfig);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{
          // backgroundColor: "white",
          padding: 15,
          marginTop: 40,
        }}
      >
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems 
        restaurentdata={restaurentdata} 
        navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Home;
