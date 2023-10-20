import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../Screens/HomePage";
import Loader from "../Loading/Loader";
const MainPage = () => {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <>
    <HomePage />
    </>
  );
};

export default MainPage