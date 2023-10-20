//src 2
import * as React from "react";
import { View, Text } from "react-native";
import HomePage from "./src2/components/Screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src2/configStore/configStore";
import LayoutPage from "./src2/components/AppLayout/LayoutPage";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <LayoutPage />
      </NavigationContainer>
    </Provider>
  );
}

//src 1
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { Provider } from "react-redux";
// import store from "./src/store/configStore";
// import Navigations from "./src/components/Navigate/Navigations";

// export default function App() {
//   return (
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Navigations />
    //   </NavigationContainer>
    // </Provider>
//   );
// }
